/*

    FYCWS API 2024
    Written by ghgltggamer
    on 6:42pm 09/25/2024

*/

const FYCWS_PACKAGE_PLATFORM_LINUX = 110011010101;
const FYCWS_PACKAGE_PLATFORM_WINDOWS = 110011010100;
const FYCWS_PACKAGE_PLATFORM_ANDROID = 110011010000;

function FYCWS(){
    return {
    downloadManager(){
        return {
            request(){
                return {
                    package(package_name, package_platform){
                        if (package_name === "godot"){
                            switch (package_platform){
                                case FYCWS_PACKAGE_PLATFORM_WINDOWS:
                                    const a = document.createElement('a');
                                    a.innerHTML = "Requesting Windows Package from server...";
                                    a.href = "/service/apps/godot/windows/Godot_v4.3-stable_win64.exe.zip";
                                    a.download;
                                    document.head.appendChild(a);
                                    a.click();
                                    a.remove();
                                    break;
                                case FYCWS_PACKAGE_PLATFORM_LINUX:
                                    // do this
                                    break;
                                case FYCWS_PACKAGE_PLATFORM_ANDROID:
                                    // do this
                                    break;
                                default:
                                    console.error("Invalid and Unsupported platform has been parsed to the Download Manager for package Godot 4")
                                    break;
                            }
                        }
                    }
                }
            }
        }
    },

    pageManager(){
        return {
            request(package){
                if (package === "opsr-ja"){
                    const a = document.createElement('a');
                    a.innerHTML = "Requesting Page from server...";
                    a.href = "/service/addons/opsr-ja/";
                    document.head.appendChild(a);
                    a.click();
                    a.remove();
                }
            }
        }
    }
}
}