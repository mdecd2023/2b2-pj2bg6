var tipuesearch = {"pages": [{'title': 'About', 'text': 'repository: https://github.com/mdecd2023/2b2-pj2bg6 \n page: https://mdecd2023.github.io/2b-pj2bg6 \n 41023226 41023226 \n 41023220 41023220 \n 41023253 Tzm0306 \n 41023233 Anguss676 \n', 'tags': '', 'url': 'About.html'}, {'title': 'w9', 'text': '', 'tags': '', 'url': 'w9.html'}, {'title': 'w9-41023226', 'text': '\n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n 心得:今天使用老師給的removeAPI的程式控制機器人，可以透過改IP的方式操控其他電腦的機器人，十分有趣。 \n', 'tags': '', 'url': 'w9-41023226.html'}, {'title': 'w9-41023220', 'text': '心得: 今天對removeAPI有了初步的認知，覺得自己可以做得更好。 \n \n', 'tags': '', 'url': 'w9-41023220.html'}, {'title': 'w9-41023233', 'text': '\n \n \n 心得:今天使用了老師給的資料夾bubbleRob_zmq_green_red_example開啟了coppelia，學習到怎麼操控機器人，希望下次動作可以再快一點。 \n', 'tags': '', 'url': 'w9-41023233.html'}, {'title': 'w9-41023253', 'text': '心得:今天跟著老師嘗試進行了removeAPI，讓我對IP控制有了初步的概念了，希望未來能夠順利地跟上課程。 \n \n', 'tags': '', 'url': 'w9-41023253.html'}, {'title': 'w10', 'text': '\n \n \n \n 41023220 \n 在旁邊研究Brython程式環境 \n \n 41023253 \n 試著幫組長找尋亂數採樣無法正常執行的原因，試著採用其他方法。 \n \n 41023233 \n 跟組長一起討論以及改善關於Brython程式的問題， \n \n \n \n \n 有關 CoppeliaSim zmqRemoteAPI 問題 \n 1.What is zmqRemoteAPI, and how does it relate to CoppeliaSim? \n \n \n \xa0 \xa0 \xa0 \xa0 zmqRemoteAPI 是一種遠端 API（應用程式編程介面），允許使用外部編寫的程式（例如 Python、C++ 或 Matlab）連接到機器人模擬軟體 CoppeliaSim。zmqRemoteAPI 使用 ZeroMQ 網路庫進行通訊，讓使用者能夠即時互動仿真環境。 \n 2.How do you establish a connection between a Python script and CoppeliaSim using zmqRemoteAPI?(經老師驗證為錯誤) \n 要使用 zmqRemoteAPI 在 Python 腳本和 CoppeliaSim 之間建立連接，需要遵循以下步驟： 啟動 CoppeliaSim 並打開一個場景檔案。 在場景中添加一個遠端 API 伺服器物件（在添加物件對話方塊中，選擇 Remote API Server）。 在 Python 腳本中，匯入所需的模組並使用 "simxStart" 函數建立客戶端物件。 使用 "simxCallScriptFunction" 函數向 CoppeliaSim 發送命令並接收資料。 以下是一個連接到 CoppeliaSim 的 Python 程式碼範例： \n import sim as vrep\nimport time\n\n# 建立連接\nclientID = vrep.simxStart(\'127.0.0.1\', 19997, True, True, 5000, 5)\nif clientID == -1:\n    print(\'無法連接到遠端 API 伺服器\')\n    exit()\n\n# 向 CoppeliaSim 發送命令\nreturnCode, signalValue = vrep.simxGetIntegerSignal(clientID, \'mySignal\', vrep.simx_opmode_blocking)\nif returnCode == vrep.simx_return_ok:\n    print(\'信號值：\', signalValue)\nelse:\n    print(\'無法獲取信號值\')\n\n# 斷開連接\nvrep.simxFinish(clientID) \n \n \n 3.What are some common use cases for zmqRemoteAPI in CoppeliaSim? \n 在 CoppeliaSim 中使用 zmqRemoteAPI 的一些常見用例包括：\n\n機器人模擬的即時控制\n資料收集和分析\n仿真資料的可視化\n控制演算法的測試和驗證 \n \n 4.What are the advantages and disadvantages of using zmqRemoteAPI compared to other methods of communication between Python and CoppeliaSim? \n 快速高效的通訊 支援多種程式語言 即時互動仿真環境 允許遠端存取仿真 缺點可能包括更陡峭的學習曲線和需要額外的程式庫。 \n 相較於其他通訊方法，使用 zmqRemoteAPI 需要較多的程式設計經驗和了解 ZeroMQ 網路庫的概念。另外，使用 zmqRemoteAPI 需要安裝和配置 ZeroMQ 網路庫，這可能需要額外的時間和資源。 \n 5.Can you give an example of a project or task that you could complete using zmqRemoteAPI in CoppeliaSim? \n 使用 zmqRemoteAPI，可以在 CoppeliaSim 中完成許多專案或任務。以下是一個使用 zmqRemoteAPI 在 CoppeliaSim 中進行視覺感知的範例： \n 假設有一個機器人模型，可以透過 CoppeliaSim 遠端 API 伺服器控制。此外，模型上有一個攝影機，可以捕捉模擬環境中的影像。目標是讓機器人模型能夠偵測影像中的物體並移動到它們的位置。 \n 以下是一個使用 Python 和 zmqRemoteAPI 實現的範例： \n 1.在 CoppeliaSim 中建立一個機器人模型和一個攝影機。 \n 2.在 Python 中使用 zmqRemoteAPI 建立連接，並使用 "simxGetObjectHandle" 函數獲取模型和攝影機的句柄。 \n 3.使用 "simxGetVisionSensorImage" 函數獲取攝影機的畫面。 \n 4.使用 OpenCV 或其他圖像處理程式庫分析攝影機畫面，偵測物體的位置。 \n 5.使用 "simxSetJointTargetPosition" 函數控制機器人模型的移動，使其移動到偵測到的物體的位置。 \n \n \n 你們的組長已經將問題送給Chatgpt了，將 檔案 下載後請三人選擇如何分這五題(改完請刪除此訊息) \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': "場景   記分板   瀏覽器中計分板設計 (.7z含場景與控制程式) \n # pip install pyzmq cbor keyboard\nfrom zmqRemoteApi import RemoteAPIClient\nimport keyboard\n\nclient = RemoteAPIClient('localhost', 23000)\n\nprint('Program started')\nsim = client.getObject('sim')\nsim.startSimulation()\nprint('Simulation started')\n\ndef setBubbleRobVelocity(leftWheelVelocity, rightWheelVelocity):\n    leftMotor = sim.getObject('/leftMotor2')\n    rightMotor = sim.getObject('/rightMotor2')\n    sim.setJointTargetVelocity(leftMotor, leftWheelVelocity)\n    sim.setJointTargetVelocity(rightMotor, rightWheelVelocity)\n\n'''\n# Example usage 1:\nsetBubbleRobVelocity(1.0, 1.0)\ntime.sleep(2)\nsetBubbleRobVelocity(0.0, 0.0)\n'''\n# use keyborad to move BubbleRob\n\nwhile True:\n    if keyboard.is_pressed('w'):\n        setBubbleRobVelocity(3.0, 3.0)\n    elif keyboard.is_pressed('z'):\n        setBubbleRobVelocity(-2.0, -2.0)\n    elif keyboard.is_pressed('a'):\n        setBubbleRobVelocity(-1.0, 2.0)\n    elif keyboard.is_pressed('s'):\n        setBubbleRobVelocity(2.0, -1.0)\n    elif keyboard.is_pressed('q'):\n        # stop simulation\n        sim.stopSimulation()\n    else:\n        setBubbleRobVelocity(0.0, 0.0)\n\n \n 可以修改 ('/leftMotor)、('/rightMotor) \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n", 'tags': '', 'url': 'w11.html'}, {'title': '41023226', 'text': "自評:85分\xa0 \n 負責部分: 將他們fork後pull request 發生問題時(例:無法auto-merge)，負責修改錯誤文件並使其能成功合併、足球場繪製、單機計分板程式設計 \n 遇到的難題&心得 \n 1.將計分板程式弄上去後發現球進不會感應，但機器人會，原本以為我的程式出現錯誤，但沒想到是球與機器人的 Collidable Measurable Detectable 設定有誤，應將球的勾選而不是機器人 \n 2.打算將進球後進球方與被進球方放回原位，並將球放在離被進球方較近的位置，結果對 'sim.getObjectPosition' 函數的未知鬧出許多笑話，像是 -1 不知道要放在座標前面還是後面XD \n 3. 原本打算一開始球以亂數形式產生(避免在正中間而造成雙方僵持不下)，但我的記分板中的程式由於第二點以至於一開始一定要有一顆球，而不能我想到的(放進zmq程式中亂數產球)而不了了之，希望之後我能想出個好方法。 \n 4.控制手感是真的差 \n 以下是最終的記分板 \n \n function sysCall_init()\n    score1 = 0\n    score3 = 0 \n    s0={1,1,1,0,1,1,1}\n    s1={0,0,1,0,0,1,0}\n    s2={1,0,1,1,1,0,1}\n    s3={1,0,1,1,0,1,1}\n    s4={0,1,1,1,0,1,0}\n    s5={1,1,0,1,0,1,1}\n    s6={1,1,0,1,1,1,1}\n    s7={1,0,1,0,0,1,0}\n    s8={1,1,1,1,1,1,1}\n    s9={1,1,1,1,0,1,1}\n    s={s0,s1,s2,s3,s4,s5,s6,s7,s8,s9}\n    for j = 0,6,1 do\n        local t = sim.getObject('./ten['..j..']')\n        if (s[1][j+1]==1) then\n            sim.setShapeColor(t, nil, sim.colorcomponent_ambient_diffuse, {1, 0, 0})\n        else\n            sim.setShapeColor(t, nil, sim.colorcomponent_ambient_diffuse, {1, 1, 1})\n        end\n    end\n    for j = 0,6,1 do\n        local d = sim.getObject('./digit['..j..']')\n        if (s[1][j+1]==1) then\n            sim.setShapeColor(d, nil, sim.colorcomponent_ambient_diffuse, {1, 0, 0})\n        else\n            sim.setShapeColor(d, nil, sim.colorcomponent_ambient_diffuse, {1, 1, 1})\n        end\n    end\nend\n\nsensor = sim.getObject('./sensor')\ninitialPos = sim.getObjectPosition(sensor, -1)\ninitialOri = sim.getObjectOrientation(sensor, -1)\nball = sim.getObject('/ball')\nfunction sysCall_actuation()\n    bubbleRob1 = sim.getObject('/bubbleRob1')\n    bubbleRob2 = sim.getObject('/bubbleRob2')\n    local initialOri1 = sim.getObjectOrientation(bubbleRob1, -1)\n    local initialOri2 = sim.getObjectOrientation(bubbleRob2, -1)\n    result = sim.readProximitySensor(sensor)\n    if (result > 0) then\n        if (score1 < 9) then\n            score1 = score1 + 1\n            sim.setObjectPosition(ball, -1, {0,0,0})\n            sim.setObjectPosition(bubbleRob1, -1, {-0.75, -0.2, 0.12})\n            sim.setObjectOrientation(bubbleRob1, -1, initialOri1)\n            sim.setObjectPosition(bubbleRob2, -1, {0.65, -0.225, 0.12})\n            sim.setObjectOrientation(bubbleRob2, -1, initialOri2)\n            for i = 0, 9, 1 do\n                if (score1 == i) then\n                    for j = 0, 6, 1 do\n                        local d = sim.getObject('./digit['..j..']')\n                        if (s[i+1][j+1] == 1) then\n                            sim.setShapeColor(d, nil, sim.colorcomponent_ambient_diffuse, {1, 0, 0})\n                        else\n                            sim.setShapeColor(d, nil, sim.colorcomponent_ambient_diffuse, {1, 1, 1})\n                        end\n                    end\n                end\n            end\n            sim.setObjectPosition(ball, -1, {-0.325, -0.25,0.05})\n            sim.setObjectOrientation(ball, -1, {0,0,0})\n            score2 = score1\n        elseif (score3 < 9) then\n            score1 = 0\n            score3 = score3 + 1\n            for i = 0, 9, 1 do\n                if (score3 == i) then\n                    for j = 0, 6, 1 do\n                        local t = sim.getObject('./ten['..j..']')\n                        if (s[i+1][j+1] == 1) then\n                            sim.setShapeColor(t, nil, sim.colorcomponent_ambient_diffuse, {1, 0, 0})\n                        else\n                            sim.setShapeColor(t, nil, sim.colorcomponent_ambient_diffuse, {1, 1, 1})\n                        end\n                    end\n                end\n            end\n            score4 = score3\n        else\n            sim.pauseSimulation()\n        end\n    end\nend\n \n 心得:我必須得承認以上程式不是我百分之百手打出來的，但我很自豪，我能透過使用ChatGPT的方式，以自己的力量將這次的協同作業給做出來，而在這之中我也受益良多學到了許多在CoppeliaSim中的lua函式應用包括但不限於: \n \n simCall_init()  : 模擬開始時初始化數值和物件的初始顏色。 \n sim.getObject()  : 獲取指定名稱的物件的句柄(handle)。(老實說一開始還真沒看過句柄這個詞) \n sim.setShapeColor()  : 設置物體的顏色。 \n sim.getObjectPosition()  : 獲取物體的位置。 \n sim.getObjectOrientation()  : 獲取物體的方向。 \n sim.readProximitySensor()  : 讀取接近感應器的數值。 \n sim.setObjectPosition()  : 設置物體的位置。 \n sim.setObjectOrientation()  : 設置物體的方向。 \n sim.pauseSimulation()  : 暫停模擬。 \n \n 因為以上只是我在 最終的計分板 的程式中學到的，在w11的 記分板 程式中，由於當時沒有將進球後如何reset球與機器人，而將程式弄得較簡易，但話雖如此我也在計分板程式中學到了 \n \n sim.setObjectSpecialProperty()：用來設定物體的特殊屬性。 \n \n 這個酷酷的函式，雖然我不能說能完全應用以上程式，但至少之後我再看到他們的時候能感到一絲安慰吧(終於看到熟悉的程式了)。", 'tags': '', 'url': '41023226.html'}, {'title': '41023253', 'text': '', 'tags': '', 'url': '41023253.html'}, {'title': '41023220', 'text': '自評 62 \n 跟組長一起討論作業的開發內容並實測，並教導其他不熟悉的組員 \n 心得:\xa0 \n 上次只有把單純的足球場做出來，並沒有計分的規則，在做出記分板以及在寫記分板的程式的時候遇到了不少的問題，但我們都一一克服了', 'tags': '', 'url': '41023220.html'}, {'title': '41023233', 'text': '', 'tags': '', 'url': '41023233.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Brython_ex2', 'text': 'This code uses the Euler method to approximate the solution to the ODE dy/dx = x - y with an initial condition of y0 = 1.0. The solution is calculated for a range of x values from 0 to 5. \n \n \n \n \n Solve ODE: \n from browser import document\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new paragraph element and set its text content to the solution\np = document.createElement(\'p\')\np.textContent = f"The solution to the ODE is: {y}"\n\n# Append the paragraph element to the body of the webpage\ndocument.body.appendChild(p) \n \n \n \n \n \n Brython environment and  Plotly.js : \n <script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\']});\n}\n// ]]></script>\n<p id="brython_div"></p> \n Brython programe with Plotly.js: \n from browser import document, window\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new div element to hold the plot\n#plot_div = document.createElement(\'div\')\n#plot_div.id = \'plot\'\n#document.body.appendChild(plot_div)\nplot_div = document["brython_div"]\n\n# Plot the solution using plotly.js\ndata = [{\'x\': x, \'y\': y}]\nwindow.Plotly.newPlot(\'brython_div\', data) \n This code defines a function dy_dx that represents the mass-spring-damper ordinary differential equation. The Euler method is used to solve this equation for a range of x values from 0 to 20 with initial conditions of y0 = [1.0, 0.0]. The solution is then plotted on the webpage using  plotly.js . \n \n \n This code defines a function dy_dx that represents the mass-spring-damper system with a PID controller. The gains of the PID controller are set to Kp = 10.0, Ki = 1.0, and Kd = 0.5. The Euler method is used to solve this system of equations for a range of x values from 0 to 20 with initial conditions of y0 = [0.0, 0.0, 0.0, 0.0]. The response of the system is then plotted on the webpage using  plotly.js . \n \n \n \n \n \n \n \n STL part viewer \n \n \n Using  sine-cosine algorithm  to optimize with constraints in Brython: \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n Plot the result by using  plotly.js : \n \n \n \n \n', 'tags': '', 'url': 'Brython_ex2.html'}, {'title': 'Brython環境', 'text': '有好心人告訴我只有16組，所以改了一下git \n 亂數 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n \n', 'tags': '', 'url': 'Brython環境.html'}]};