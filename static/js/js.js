let selectorButton = document.getElementById("selector-button")
let checked = true
let allChecked = false
let darkOrLight = true
let checkbox = document.getElementsByName("checkbox")
let nothingSelected = document.getElementById("alert")
let minOne = 0

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    alert("The site does not provide data suitable for your device (mobile)")
    window.open("https://www.google.com", "_self")
}

let urls = {
    steam: "https://cdn.cloudflare.steamstatic.com/client/installer/SteamSetup.exe",
    discord: "https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x86",
    utorrent: "https://download-hr.utorrent.com/track/stable/endpoint/utorrent/os/windows",
    mcpremium: "https://launcher.mojang.com/download/MinecraftInstaller.exe",
    epicgames: "https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi",
    battlenet: "https://www.battle.net/download/getInstallerForGame?os=win&gameProgram=BATTLENET_APP&version=Live&id=548869183.1649688146",
    logitechhub: "https://download01.logi.com/web/ftp/pub/techsupport/gaming/lghub_installer.exe",
    origin: "https://www.dm.origin.com/download",
    intellij: "https://download.jetbrains.com/idea/ideaIU-2022.2.3.exe?_ga=2.38872995.1683091627.1668955016-2011144157.1668955016&_gl=1*19oyvew*_ga*MjAxMTE0NDE1Ny4xNjY4OTU1MDE2*_ga_9J976DJZ68*MTY2ODk1NTAxNS4xLjEuMTY2ODk1NTAzMy4wLjAuMA..",
    vs: "https://c2rsetup.officeapps.live.com/c2r/downloadVS.aspx?sku=community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030",
    vscode: "https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user",
    sublimetext: "https://download.sublimetext.com/sublime_text_build_4126_x64_setup.exe",
    pycharm: "https://download.jetbrains.com/python/pycharm-community-2021.3.3.exe?_ga=2.185222057.1085385846.1649606918-1947123728.1649606918&_gl=1*ifgtn3*_ga*MTk0NzEyMzcyOC4xNjQ5NjA2OTE4*_ga_V0XZL7QHEB*MTY0OTY5MDcwOS4yLjEuMTY0OTY5MDcxMi4w",
    blender: "https://ftp.nluug.nl/pub/graphics/blender/release/Blender3.1/blender-3.1.2-windows-x64.msi",
    eclipsejavadev: "https://ftp.acc.umu.se/mirror/eclipse.org/oomph/epp/2022-03/R/eclipse-inst-jre-win64.exe",
    figma: "https://www.figma.com/download/desktop/win",
    nodejs: "https://nodejs.org/dist/v16.14.2/node-v16.14.2-x64.msi",
    qtdesigner: "https://d13lb3tujbc8s0.cloudfront.net/onlineinstallers/qt-unified-windows-x86-4.3.0-1-online.exe",
    winrar: "https://www.win-rar.com/fileadmin/winrar-versions/winrar/winrar-x64-611it.exe",
    sevenzip: "https://www.7-zip.org/a/7z2107-x64.exe",
    obs: "https://cdn-fastly.obsproject.com/downloads/OBS-Studio-28.1.2-Full-Installer-x64.exe",
    geforce: "https://it.download.nvidia.com/GFE/GFEClient/3.25.1.27/GeForce_Experience_v3.25.1.27.exe",
    virtualbox: "https://download.virtualbox.org/virtualbox/7.0.4/VirtualBox-7.0.4-154605-Win.exe",
    spotify: "https://download.scdn.co/SpotifySetup.exe",
    vlc: "https://get.videolan.org/vlc/3.0.16/win64/vlc-3.0.16-win64.exe",
    malwarebytes: "https://downloads.malwarebytes.com/file/mb-windows",
    avast: "https://www.avast.com/it-it/download-thank-you.php?product=FAV-PPC&locale=it-it&direct=1",
}


function selectAll() {    
        if (checked == true) {
            selectorButton.innerHTML = "Deselect All"
            for (let i = 0; i < checkbox.length; i++) {
                checkbox[i].checked = checked
            }
            checked = false
            allChecked = true
        } else if (checked == false) {
            selectorButton.innerHTML = "Select All"
            for (let i = 0; i < checkbox.length; i++) {
                checkbox[i].checked = checked
            }
            checked = true
            allChecked = false
        }
}

function download() {
    console.log("Clicked", allChecked)
    if (allChecked == true) {
        for (let i = 0; i < Object.keys(urls).length; i++) {
            let value = Object.keys(urls)[i]
            window.open(urls[value])
            console.log(i)
        }
    } else {
        for (let i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked == true) {
                console.log(i)
                let value = Object.keys(urls)[i]
                window.open(urls[value])
                checkbox[i].checked = false
                minOne = 1
            }
        }
        if (minOne == 0) {
            nothingSelected.style.display = "flex"
        }
        minOne = 0
    }
}

function ok() {
    nothingSelected.style.display = "none"
}

function changeMode() {
    if (darkOrLight == true) {
        document.getElementById("dark-mode").style.backgroundImage = "url(../static/images/light_mode.png)"
        document.querySelector("body").classList.add("dark-mode")
        document.querySelector(".change-mode span").innerHTML = "Light Mode"
        darkOrLight = false
    } else if (darkOrLight == false) {
        document.getElementById("dark-mode").style.backgroundImage = "url(../static/images/dark_mode.png)"
        document.querySelector("body").classList.remove("dark-mode")
        document.querySelector(".change-mode span").innerHTML = "Dark Mode"
        darkOrLight = true
    }
}
    
