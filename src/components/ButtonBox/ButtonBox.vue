<template>
  <el-col class="btn">
    <span class="head-text"><slot name='head-text'></slot></span>
    <div class="button__icon">
      <slot name='button-icon'></slot>
    </div>
    
    <span class="main-text"><slot name='main-text'></slot></span>
  </el-col>
</template>
<script>
export default {
  props: ["headText", "mainText"]
};
</script>
<style lang="scss">
.button__icon {
  img {
  max-width: 90px;
  max-height: 90px;
  }
}
.btn {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  color: #3162b1;
  transition: all .2s ease 0s;
  
  border: 5px solid #fff;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:hover,&:focus {
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(172, 209, 252, 0.5) 100%), #FFFFFF;
    border: 5px solid #ACD1FC;
    cursor: pointer;
  }
}
.head-text {
  font-family: 'Roboto',sans-serif;
  font-style: normal;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  min-height: 46px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1200px) {
    min-height: 0;
    font: {
      size: 18px;
    }
  }
}
.main-text {
  font-family: 'Roboto',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  @media screen and (max-width: 1200px) {
    font-size: 14px;
    line-height: 2;
  }
}
</style>
