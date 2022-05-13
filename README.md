# How To Fix Race Condition

[**Race condition**](https://www.baeldung.com/cs/race-conditions) adalah dimana sebuah process saling balap membalap satu sama lain, katakanlah saya mempunyai sebuah **fungsi A** dan **fungsi B** dan kedua fungsi tersebut ingin mengakses **variable X**, yang dimana **fungsi A** dan **fungsi B** ini mengakses variable secara bersamaan inilah yang dinamakan [**race condition**](https://stackoverflow.com/questions/34510/what-is-a-race-condition), untuk mengatasi masalah ini semua anda bisa menggunakan module yang bernama `async-mutex` atau `mutexify`, yang dimana nanti **fungsi B** akan di lock terlebih dahulu sampai proses si **fungsi A** itu selesai agar tidak terjadi **race condition**, pada fungsi yang telah kita buat, case **race condition** bisa terjadi kapan saja baik process itu dalam **syncronous** atau **asyncronus**, mungkin dalam suatu case ada beberapa yang bisa di handle dengan menggunakan `await`, tetapi terkadang ada juga yang tidak bisa di handle dengan `await` walapun sudah diberikan `await` dan masih tetap **race condition**.

![](https://i.ytimg.com/vi/7aF0q7NfwfA/maxresdefault.jpg)


# More Examples

- [JavaScript Race Conditions & Function Throttling with Promises](https://schwiiz.org/2020/04/18/javascript-race-conditions-throttling/)
- [How to avoid async race conditions in JavaScript](https://medium.com/@slavik57/async-race-conditions-in-javascript-526f6ed80665)
- [Nodejs Race Conditions](https://www.nodejsdesignpatterns.com/blog/node-js-race-conditions/)
- [Synchronize Your JavaScript Code With Async-Mutex](https://medium.com/swlh/synchronize-your-javsscript-app-with-async-mutex-f0149513ea4b)
