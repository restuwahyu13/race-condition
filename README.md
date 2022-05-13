# [How To Fix Race Condition](https://www.nodejsdesignpatterns.com/blog/node-js-race-conditions/)

[**Race condition**](https://www.baeldung.com/cs/race-conditions) adalah dimana sebuah process saling balap membalap satu sama lain, katakanlah saya mempunyai sebuah **fungsi A** dan **fungsi B** dan kedua fungsi tersebut ingin mengakses **variable X**, yang dimana **fungsi A** dan **fungsi B** ini mengakses variable secara bersamaan inilah yang dinamakan [**race condition**](https://stackoverflow.com/questions/34510/what-is-a-race-condition), untuk mengatasi masalah ini semua anda bisa menggunakan module yang bernama `async-mutex` atau `mutexify`, untuk merubah **asyncronus (non blocking)** process menjadi **syncronus (blocking)** process agar tidak terjadinya **race condition**, pada fungsi yang telah kita buat.

![](https://i.ytimg.com/vi/7aF0q7NfwfA/maxresdefault.jpg)
