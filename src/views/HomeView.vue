<template>
  <div class="login_container">
    <table class="login_table_container">
      <tr>
        <td>
          <input
            type="id"
            class="id"
            v-model="id"
            placeholder="닉네임을 입력해주세요."
          />
        </td>
      </tr>
      <td>
        <input
          type="password"
          class="pwd"
          v-model="password"
          @keyup.enter="loginA"
        />
      </td>
      <tr>
        <td>
          <button @click="loginB" class="login_button">로그인</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      id: "",
      password: "",
    };
  },
  methods: {
    loginA: function () {
      axios
        .post("/id", {
          id: this.id,
          password: this.password,
        })
        .then((res) => {
          if (res.data == "1") {
            console.log(res.data);
            alert("당신은 저의 마니또가 맞습니다.");
            this.$router.push("/about");
          } else {
            console.log("로그인 실패");
            // Handle unsuccessful login (e.g., show an error message)
          }
        })
        .catch((error) => {
          console.error("Error during login:", error);
          // Handle the error (e.g., show an error message to the user)
        });
    },

    loginB: function () {
      axios
        .post("https://web-chat-32updzt2alpp3tqt2.sel4.cloudtype.app/id", {
          id: this.id,
          password: this.password,
        })
        .then((res) => {
          if (res.data == "1") {
            console.log(res.data);
            alert("당신은 저의 마니또가 맞습니다.");
            this.$router.push("/about");
          } else {
            console.log("로그인 실패");
            // Handle unsuccessful login (e.g., show an error message)
          }
        })
        .catch((error) => {
          console.error("Error during login:", error);
          // Handle the error (e.g., show an error message to the user)
        });
    },
  },
};
</script>

<style>
.login_container {
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 15%;
  justify-content: center;
}

.id,
.pwd {
  width: 40vh;
  height: 5vh;
  border-radius: 15px;
  font-size: x-large;
}

.login_button {
  width: 10vh;
  height: 3vh;
  border-radius: 15px;
}

.login_button:hover {
  transform: scale(1.1);
  background-color: rgb(75, 137, 220);
}
/* .login_table_container {
  align-items: center;
  display: flex;
  justify-content: center;
} */
</style>
