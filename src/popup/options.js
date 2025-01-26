import './popup.css';
import { isCloudSyncEnabled, loadConfigs, setCloudSyncEnabled, setProblemSorter } from "./service/configService";
import { store } from './store';
import { optionPageFeedbackMsgDOM } from './util/doms';
import { descriptionOf, idOf, problemSorterArr } from "./util/sort";

document.addEventListener('DOMContentLoaded', async () => {

    await loadConfigs();

    const optionsForm = document.getElementById('optionsForm');
    
    // problem sorted setting
    const problemSorterSelect = document.getElementById('problemSorterSelect');
    const problemSorterMetaArr = problemSorterArr.map(sorter => {
        return {id: idOf(sorter), text: descriptionOf(sorter)};
    });

    problemSorterMetaArr.forEach(sorterMeta => {
        const optionElement = document.createElement('option');
        optionElement.value = sorterMeta.id;
        optionElement.textContent = sorterMeta.text;
        problemSorterSelect.append(optionElement);
    })

    // cloud sync setting
    const syncToggle = document.getElementById('syncToggle');
    syncToggle.checked = store.isCloudSyncEnabled || false;

    optionsForm.addEventListener('submit', async e => {
        e.preventDefault();
        const selectedSorterId = problemSorterSelect.value;
        const isCloudSyncEnabled = syncToggle.checked;
        await setProblemSorter(Number(selectedSorterId));
        await setCloudSyncEnabled(isCloudSyncEnabled);
        optionPageFeedbackMsgDOM.style.display = 'block';
        setTimeout(() => optionPageFeedbackMsgDOM.style.display = 'none', 1000);
    })
});