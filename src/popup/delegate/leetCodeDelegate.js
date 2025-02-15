const user_agent =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36";
const params = {
    operationName: "questionTitle",
    variables: { titleSlug: "" }
};
const headers = {
    'User-Agent': user_agent,
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Referer': "",
};

export const queryProblemInfo = async (slug, site) => {
    const baseUrl = `https://leetcode.${site}`;
    params.variables.titleSlug = slug;
    params.query = `query questionTitle($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
          questionFrontendId
          ${site === "cn" ? "translatedTitle" : "title"}
          difficulty
        }
      }`
    headers.Referer = `${baseUrl}/problems/${slug}`

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(params),
        timeout: 10000
    };

    const response = await fetch(`${baseUrl}/graphql`, requestOptions);
    const content = await response.json();

    return content.data.question;
}

// 从URL获取站点和题目标识
function extractProblemInfo(url) {
    const match = url.match(/(com|cn)(\/|$)/);
    const site = match ? match[1] : "com";
    console.log(`site is ${site}`);

    let cleanUrl = url;
    const possible_suffix = ["/submissions/", "/description/", "/discussion/", "/solutions/"];
    for (const suffix of possible_suffix) {
        if (cleanUrl.includes(suffix)) {
            cleanUrl = cleanUrl.substring(0, cleanUrl.lastIndexOf(suffix) + 1);
            break;
        }
    }

    const problemSlug = cleanUrl.split("/").splice(-2)[0];
    return { site, problemSlug, cleanUrl };
}

// 基础的获取题目信息函数
export const getProblemInfo = async (url) => {
    const { site, problemSlug, cleanUrl } = extractProblemInfo(url);
    
    const question = await queryProblemInfo(problemSlug, site);

    return {
        problemIndex: question.questionFrontendId,
        problemName: `${question.questionFrontendId}. ${site === "cn" ? question.translatedTitle : question.title}`,
        problemLevel: question.difficulty,
        problemUrl: cleanUrl
    };
}

// 从当前页面URL获取题目信息
export const getProblemInfoByHref = async () => {
    const currentUrl = window.location.href;
    return await getProblemInfo(currentUrl);
}

// 从指定URL获取题目信息
export const getProblemInfoByUrl = async (url) => {
    if (!url.includes('leetcode.com/problems/') && !url.includes('leetcode.cn/problems/')) {
        throw new Error('请输入有效的 LeetCode 题目链接');
    }
    return await getProblemInfo(url);
}

