<script>
    // +page.server.js 에서 return한 객체가 'data'라는 이름으로 들어옵니다.
    export let data; 
    
    // 편하게 쓰기 위해 변수로 분리 (선택사항)
    $: item = data.product; 
</script>

<div class="detail-container">
    <div class="product-wrapper">
        <div class="image-area">
            <img src={item.img} alt={item.name} />
        </div>

        <div class="info-area">
            <span class="badge">BEST</span>
            <h1>{item.name}</h1>
            <p class="price">{item.price}</p>
            <p class="description">{item.desc}</p>
            
            <div class="options">
                <label>수량 선택</label>
                <select>
                    <option>1개</option>
                    <option>2개</option>
                    <option>3개</option>
                </select>
            </div>

            <div class="btn-group">
                <button class="cart">장바구니</button>
                <button class="buy">구매하기</button>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    @import './product.scss';
</style>