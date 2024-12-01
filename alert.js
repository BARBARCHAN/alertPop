// 既に警告バナーが存在するか確認し、なければ作成する
if (!document.getElementById("warning-banner")) {
    // 警告バナーの要素を作成
    const banner = document.createElement("div");
    banner.id = "warning-banner";
    banner.textContent = "必ずログアウトすること！";
    
    // バナーのスタイルを設定
    banner.style.position = "fixed";
    banner.style.top = "0";
    banner.style.left = "0";
    banner.style.width = "100%";
    banner.style.padding = "10px";
    banner.style.backgroundColor = "#ff0000";
    banner.style.color = "#ffffff";
    banner.style.textAlign = "center";
    banner.style.zIndex = "1000";
    banner.style.fontWeight = "bold";
    
    // バナーをページの先頭に追加
    document.body.prepend(banner);
  
    // 閉じるボタンを追加
    const closeButton = document.createElement("span");
    closeButton.textContent = " [閉じる]";
    closeButton.style.cursor = "pointer";
    closeButton.style.marginLeft = "10px";
    banner.appendChild(closeButton);
  
    // 閉じるボタンのクリックイベント
    closeButton.addEventListener("click", () => {
      banner.style.display = "none";
    });
  }