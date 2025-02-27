chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'printChatAsPDF') {
        // Get the active tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            if (!activeTab) {
                sendResponse({ success: false, error: 'No active tab found.' });
                return;
            }

            // Execute the script to extract chat content
            chrome.scripting.executeScript(
                {
                    target: { tabId: activeTab.id },
                    func: extractChatContent,
                },
                (results) => {                    
                    if (chrome.runtime.lastError) {
                        sendResponse({ success: false, error: chrome.runtime.lastError.message });
                        return;
                    }

                    const chatContent = results[0].result;
                    if (chatContent) {
                        // printAsPDF(chatContent);
                        sendResponse({ success: true, content: chatContent.content, title: chatContent.title });
                    } else {
                        sendResponse({ success: false, error: 'No chat content found.' });
                    }
                }
            );
        });

        // Return true to indicate that the response will be sent asynchronously
        return true;
    }
});

function extractChatContent() {
    // Replace this selector with the actual selector for the chat content on DeepSeek
    const chatElement = document.getElementsByClassName("dad65929")[0];
    const title = document.getElementsByClassName("d8ed659a")[0];
    if (chatElement && title) {
        return {
            content: chatElement.innerHTML,
            title: title.innerHTML
        }
    }
    return null;
}
