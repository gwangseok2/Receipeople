<template>
  <div>
    <h1>회원 가입 페이지</h1>
    <button class="app-login-btn kakao">카카오 로그인</button>
    <button class="app-login-btn google">구글 로그인</button>
    <button class="app-login-btn apple">애플 로그인</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style lang="scss" scoped>
.app-login-btn {
  width: 89.33%;
  height: 50px;
  background-color: #fff;
  color: #1f80fd;
  border: 1px solid #1f80fd;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  border-radius: 8px;
}
</style>
