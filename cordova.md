http://www.oracle.com/technetwork/java/javase/downloads

下载安装JAVA JDK

![点击下载最新版本](https://images.gitee.com/uploads/images/2019/0717/154656_b564a09e_5048699.png "捕获.PNG")

![选择平台](https://images.gitee.com/uploads/images/2019/0717/154717_1e474505_5048699.png "批注 2019-07-17 154610.png")

安装完毕后，添加环境变量

![进入环境变量](https://images.gitee.com/uploads/images/2019/0717/155235_d0ab4aec_5048699.png "批注 2019-07-17 154955.png")

1. 新建JAVA_HOME变量

![点击新建](https://images.gitee.com/uploads/images/2019/0717/155212_18f44d56_5048699.png "批注 2019-07-17 155028.png")

变量名：JAVA_HOME

变量值：电脑上JDK安装的绝对路径，如C:\Program Files\Java\jdk-12.0.2

2. 新建/修改 CLASSPATH 变量

变量名：CLASSPATH

变量值：.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;

3. 修改Path 变量，新建两条

%JAVA_HOME%\bin

%JAVA_HOME%\jre\bin

4. 检查 打开 cmd，输入 java，出现一连串的指令提示，说明配置成功了。