<template>
  <div class="btn">
    <div class="top-image">
      <slot name="image"></slot>
    </div>
    <div class="bottom-text">
      <span>
        <slot name="text"></slot>
      </span>
      <font-awesome-icon class="icon-gray" icon="arrow-right"/>
    </div>
  </div>
</template>
<style lang="scss">
.bottom-text {
  font-size: 20px;
  line-height: 35px;
  padding-bottom: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #5d778b;
  transition: all 0.2s ease 0s;
  
  @media screen and (max-width: 1200px) {
    font-size: 18px;
    line-height: 50px;
  }
  span {
    transition: all 0.2s ease 0s;
  }
}
.minute__btn {
  .btn {
  display: block;
  height: 100%;
  border: none;
  background: #fff;
  border-radius: 0px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    cursor: pointer;
    .top-image {
      opacity: 1;
    }
    .icon-gray {
      color: #2256aa;
      -webkit-animation: mymove 1.5s infinite;
      animation: mymove 1.5s infinite;
    }
    span {
      color: #2256aa;
    }
  }
  .top-image {
    position: relative;
    opacity: 0.8;
    transition: all 0.2s ease 0s;
    img {
      width: 100%;

      border-radius: 0px 20px 0 0;
      height: auto;
    }
  }
}
}


.icon-gray {
  font-size: 22px;
  line-height: 18px;
  text-align: center;
  position: absolute;
  right: 20px;
  top: 50%;
  
  @keyframes mymove {
    0% {
      transform: translate(0px, -50%);
    }
    50% {
      transform: translate(5px, -50%);
    }
    100% {
      transform: translate(0px, -50%);
    }
  }
  transform: translateY(-50%);
  color: #c5d3dd;
}
</style>

