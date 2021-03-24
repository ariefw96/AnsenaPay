How to generate one in 3 steps?
Step 1: Go to the root of the project in the terminal and run the below command:
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
Step 2: Go to android directory:
cd android
Step 3: Now in this android folder, run this command
./gradlew assembleDebug
There! you'll find the apk file in the following path:
yourProject/android/app/build/outputs/apk/debug/app-debug.apk

Now you have your .apk file generated, install it on your android phone and enjoy!
