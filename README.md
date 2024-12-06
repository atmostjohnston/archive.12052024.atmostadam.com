<p align="center"><img width=40% src="images/intro/cat-life-screen.png"></p>

# BEFORE CODING

- Open Windows Powershell and type the following

**git fetch**

**git pull origin branch_rachel**

- Close Windows Powershell
- Open Visual Studio Code
- Click **Go Live** in the bottom right

# AFTER CODING

- Open Windows Powershell and type the following

_git add *_

**git commit -a -m "feature"**

**git push origin branch_rachel**

- Close Windows Powershell

# INSTALLATION - ONLY ONCE

## Install Git for Windows

- Open in Browser **[Download Git](https://git-scm.com/downloads)**
- Click **Download for Windows**
- Download **64-bit Git for Windows Setup** under **Standalone Installer**
- Click **Install** and **Next** through the installer. Ensure that **Git Bash Here** is checked.

## Install Visual Studio Code

- Open in Browser **[Download Visual Studio Code](https://code.visualstudio.com/download)**

## Clone Code on Local Computer

- Open **Windows Explorer**
- Create directory **C:\Projects**
- Enter **C:\Projects**, right click and select **Git Bash Here**
- Copy & Paste the following into the terminal:
- **git clone <https://github.com/atmostadam/atmostadam.com.git>**
- Create your own branch for example **branch_rachel**
- Copy & Paste the following into the terminal:
- **git checkout -b branch_rachel**

## Set Up, Install & Start

- Open the **Visual Studio Code** application
- Go to **File** then **Open Folder**
- Choose **C:\Projects\atmostadam.com**
- Select **Extensions** icon on the left hand menu in VSCode
- Install the **Live Server** Extension
- In the bottom right hand corner, select **Go Live**
- An auto-deployment browser window will open. Every time the save button is pressed, the browser will auto-refresh with the latest code

## Commiting Code

- Open **Windows Explorer**
- Enter **C:\Projects**, right click and select **Git Bash Here**
- Copy & Paste the following into the terminal where #10 is your issue number and branch_rachel is your branch:
- git add *
- **git commit -a -m "Fixes #10"**
- **git push origin branch_rachel**
- Open in Browser **[Github atmostadam.com](https://github.com/atmostadam/atmostadam.com/pulls)**
- Select **New Pull Request**
- Select **base: main** to **compare: branch_rachel**
- **Open Pull Request**
