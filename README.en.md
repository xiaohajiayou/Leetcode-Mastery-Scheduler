[简体中文](README.md) | English
<h1 align="center">
  <img src="https://s2.loli.net/2025/02/13/pt3asz9ubdWrSxf.jpg" style="width: 10%;" />
  <br>
    <B>L</B>eetcode <B>M</B>astery<B> S</B>cheduler
  <br>
</h1>





<div align="center">

 [<img src="https://img.shields.io/badge/license-MIT-green.svg" alt="license"/>](https://github.com/xiaohajiayou/Leetcode-Mastery-Scheduler/blob/main/LICENSE)
![Chrome Web Store Users](https://img.shields.io/chrome-web-store/users/cfohhebfjnjojkloclmlfjgjekmoinke?style=flat&color=orange)
![Chrome Web Store Rating](https://img.shields.io/chrome-web-store/rating/cfohhebfjnjojkloclmlfjgjekmoinke)
[![Bilibili](https://img.shields.io/badge/Bilibili-00A1D6?style=flat&logo=bilibili&logoColor=white)](https://www.bilibili.com/video/BV1RnAYeEEu6/?spm_id_from=333.1387.homepage.video_card.click&vd_source=09dab0452e2548023f6f83174148ee0c)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=flat&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=N-_q4tvyBiA&t=5s)

</div>

<h2 align="center">
  Train memory curves, prioritize smartly, review flexibly, code smarter!
</h2>



![alt text](https://s2.loli.net/2025/02/16/eNEV49CM8ABWdZ7.jpg)   



# 🚀 Get Started

1. **Install and enable**: A draggable `rate` button appears at the bottom-right of LeetCode problem pages.
2. **Rate each problem**: After solving, click the button to score your mastery; the built-in Anki FSRS algorithm schedules reviews based on that score.
3. **Daily recommended reviews**: LMS calculates retention with the forgetting curve and recommends today's problems to review.
4. **Complete reviews**: Choose either:
   - Click ✓ directly in the popup to mark reviewed
   - On the LeetCode page, use the `rate` button to submit a review score
5. **Manage problems**: In the Problems tab you can add notes, search/filter, and export all notes as Markdown.
6. **Cloud sync (optional)**: Chrome sync is on by default; you can also configure Nutstore WebDAV to export/load backups so data stays in sync across devices anytime.

💡 **Core concept: spaced repetition that turns short-term memory into long-term knowledge.**

![alt text](https://s2.loli.net/2025/02/20/CrmZewAQlWUNuc4.gif)




    
# ☁️ Cloud Sync & Backup
- **Chrome sync (built-in, limited)**: Sign into Chrome with the same account and turn on sync (Settings → You and Google → sync everything). Extension data follows your account across devices, but storage is limited (about 300 problems). For larger datasets or manual migration, use WebDAV below.
- **Nutstore WebDAV (recommended for larger data)**:
  - Create a Nutstore account and go to Security → Third-party app management → create an **app password** (do not use your login password).
  - WebDAV URL: `https://dav.jianguoyun.com/dav/`; username is your Nutstore email; password is the app password above.
  - In LMS Settings, fill in the username/app password and save to sync/restore in one click—ideal for multi-device consistency or reinstalling the browser.
  - After first setup, run a manual sync once to seed a backup; then sync periodically.


# 👥 Join the Community

### 🎯 Join our daily check-ins and keep leveling up

<table border="0">
  <tr>
    <td width="40%" valign="top">
      <p>If you're interested, hop into our check-in group so we can:</p>
      <ul>
        <li>📅 <strong>Daily check-ins</strong> — stay accountable and consistent</li>
        <li>💡 <strong>Solution sharing</strong> — exchange approaches and tricks</li>
        <li>🔥 <strong>Study plans</strong> — build and share personalized review plans</li>
        <li>📊 <strong>Experience swaps</strong> — interview tips and problem-solving insights</li>
        <li>🤝 <strong>Q&A help</strong> — discuss new LMS features together</li>
      </ul>
      <br/>
      <div align="center">
        <img src="https://media.giphy.com/media/IPbS5R4fSUl5S/giphy.gif" width="150" alt="coding together"/>
        <p><strong>Let's conquer algorithms and land the dream offer!</strong> 💪</p>
      </div>
    </td>
    <td width="40%" align="center" valign="middle">
      <img src="https://s2.loli.net/2025/09/15/KeWpytMIRNnPlVx.png" width="300" alt="WeChat group QR code"/>
      <p><i>Add me to chat; note “LMS刷题” and I’ll pull you into the group</i></p>
    </td>
  </tr>
</table>


    
# 📥 Installation

Store reviews can take time; the newest builds appear first on the GitHub Releases page (star the repo so you don’t lose it). Once approved, they’ll land in the stores.
<div>
🔗<a href="https://chromewebstore.google.com/detail/leetcode-mastery-schedule/cfohhebfjnjojkloclmlfjgjekmoinke">Get LMS from Chrome Web Store</a>
</div>

<div>
🔗<a href="https://microsoftedge.microsoft.com/addons/detail/leetcode-mastery-schedule/kmbccaknhoaekcoicbkgbkmcjfhbmfck?hl=zh-CN">Get LMS from Edge Web Store (not yet restored)</a>
</div>
<div>
🔗<a href="https://github.com/xiaohajiayou/Leetcode-Mastery-Scheduler/releases">Get the LMS zip from GitHub Releases, unzip locally, and install in your browser via developer mode</a>
</div>

<br>

# 📝 Roadmap

| Task/Feature               | Status    | Remarks                                      |
|----------------------------|-----------|----------------------------------------------|
| Multi-device cloud sync     | ✳️  Completed | Edge, Chrome                                 |
| Monitoring reminders       | ✳️  Completed | bilibili, youtube                            |
| Add LeetCode URL           | ✳️  Completed | For IDE coding practice, perfect for working |
| Add custom card URL        | ✳️  Completed | For recording interview problems, alternative for other coding websites |
| Provide note-taking feature | ✳️  Completed | Add note button in problem list, support exporting all notes to Markdown |
| Collect Anki FSRS training data | ✳️  Completed | To be used for testing FSRS official training endpoint |
| Integrate Anki FSRS official training endpoint | ✳️  Completed | Currently supports training with local review records (may affect cloud sync users) |
| Expand webdav cloud sync service | ✳️  Completed  | Integrated with Nutstore                 |
| Support language switching  | ❌  Pending   | Pending completion                          |
| Switch data sources for different websites | ❌  Pending   | Currently only supports LeetCode international and Chinese sites; aim to add Luogu, etc. |
| Compatibility with Firefox | ❌  Pending   | Pending completion                          |
| Compatibility with `ctrl + enter` | ❌  Pending   | Lower priority for now                       |



# 🌟 Star History 

[![Star History Chart](https://api.star-history.com/svg?repos=xiaohajiayou/Leetcode-Mastery-Scheduler&type=Date)](https://star-history.com/#xiaohajiayou/Leetcode-Mastery-Scheduler&Date)

We welcome every user to try LMS! If you find it helpful, please Star the GitHub repo—it’s the biggest support (and helps you keep track of updates). If you hit issues or bugs, open an Issue and we'll handle it quickly.



# 🙏 Acknowledgments
This project is based on [PMCA (Practice Makes Code Accepted)](https://github.com/HaolinZhong/PMCA) with improvements to its codebase. While keeping the core spaced-repetition concept, we optimized for time-constrained review scenarios with smarter priority assessment and more flexible interaction logic to help you get maximum benefit from limited study time.
