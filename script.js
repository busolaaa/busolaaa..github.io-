let tabButtons = document.querySelectorAll(".tab-btn");
let tabContents = document.querySelectorAll(".tab-content");


function hideAllTabs() {
    tabContents.forEach(tab => {
        tab.style.display = "none";
    });
}


function showTab(tabId) {
    hideAllTabs();
    let activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.style.display = "block";
    }
}


tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        let tabId = button.getAttribute("data-tab");
        showTab(tabId);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    showTab("personal");
});
