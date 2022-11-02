<template>
  <div class="sign-up">
    <h1 class="title">회원 가입 페이지</h1>
    <div class="flex-wrapper">
      <button class="app-login-btn kakao">카카오 로그인</button>
      <button class="app-login-btn google">구글 로그인</button>
      <button class="app-login-btn apple">애플 로그인</button>
    </div>
    <div>
      <p class="other-login-btn">다른 방법으로 로그인</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style lang="scss" scoped>
.sign-up {
  background-color: #fafafa;
  min-height: 100vh;
  .title {
    text-align: center;
    padding: 40px 0;
  }
  .flex-wrapper {
    @include flexBoxCenter(center);
    flex-wrap: wrap;
  }
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
  div {
    text-align: center;
    .other-login-btn {
      display: inline-block;
      font-size: 12px;
      color: #666;
      border-bottom: 1px solid #666;
    }
  }
}
</style>
