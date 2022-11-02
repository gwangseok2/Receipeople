<template>
  <div class="sign-up">
    <h1 class="title">Receipeople</h1>
    <figure class="sign-up-main-login-img"></figure>
    <div class="flex-wrapper">
      <div>
        <button class="app-login-btn kakao">카카오 로그인</button>
      </div>
      <div>
        <button class="app-login-btn google">구글 로그인</button>
      </div>
      <div>
        <button class="app-login-btn apple">애플 로그인</button>
      </div>
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
  max-width: 717px;
  margin: 0 auto;
  background-color: #fafafa;
  min-height: 100vh;
  &-main-login-img {
    width: 89.33%;
    height: 300px;
    border-radius: 12px;
    border: 3px solid #000;
    margin: 20px auto;
    text-align: center;
    background: #fff;
    background-image: url('@/assets/img/gif/comeon.gif');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    color: #000;
    word-break: keep-all;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .title {
    text-align: center;
    padding: 40px 0;
  }
  .flex-wrapper {
    @include flexBoxCenter(center);
    flex-wrap: wrap;
    div {
      width: 100%;
    }
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
    opacity: 0;
  }
  .app-login-btn:active {
    transition: all 1;
    transform: scale(1.05);
  }
  .app-login-btn.kakao {
    animation: moving 1s forwards;
  }
  .app-login-btn.google {
    animation: moving 1.5s forwards;
  }
  .app-login-btn.apple {
    animation: moving 2s forwards;
  }
  @keyframes moving {
    0% {
      width: 0%;
    }
    100% {
      width: 89.33%;
      opacity: 1;
    }
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
