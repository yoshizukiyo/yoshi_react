<script lang="ts">
  /**
   * 버튼의 종류(variant)를 외부에서 받아오기 위한 props 입니다.
   * Svelte 5에서는 $props() 룬을 사용합니다.
   */
  let { variant = 'primary' }: { variant?: 'primary' | 'outline' } = $props();
</script>

<!-- 
  variant 값에 따라 클래스를 동적으로 적용합니다.
  class:btn-primary={variant === 'primary'} 와 같은 Svelte의 class 디렉티브를 사용하면
  조건이 true일 때 해당 클래스가 적용됩니다.
-->
<button 
  type="button" 
  class="btn"
  class:btn-primary={variant === 'primary'}
  class:btn-outline={variant === 'outline'}
>
  <slot /> <!-- 부모 컴포넌트에서 <Button>여기에 텍스트</Button> 와 같이 넣은 내용이 표시됩니다. -->
</button>

<style>
  .btn {
    padding: 12px 30px;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    border: 2px solid transparent;
    transition: transform 0.2s;
    margin: 0 5px;
  }
  .btn:hover {
    transform: translateY(-2px);
  }
  .btn-primary {
    background-color: #ff3e00;
    color: white;
    border-color: #ff3e00;
  }
  .btn-outline {
    background-color: transparent;
    border-color: #ff3e00;
    color: #ff3e00;
  }
</style>