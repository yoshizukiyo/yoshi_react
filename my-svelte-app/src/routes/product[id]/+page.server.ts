// src/routes/product/[id]/+page.server.ts
import type { PageServerLoad } from './$types';

// 가상의 상품 데이터
const products = [
    { id: '1', name: '멋진 운동화', price: '89,000원', desc: '가볍고 편안한 러닝화입니다.', img: 'https://placehold.co/400x400?text=Shoes' },
    { id: '2', name: '기계식 키보드', price: '125,000원', desc: '타건감이 일품인 적축 키보드.', img: 'https://placehold.co/400x400?text=Keyboard' },
    { id: 'apple', name: '맛있는 사과', price: '3,000원', desc: '아침에 먹으면 금사과.', img: 'https://placehold.co/400x400?text=Apple' }
];

// : PageServerLoad 타입을 지정하면 params가 무엇인지 자동으로 알게 됩니다.
export const load: PageServerLoad = ({ params }) => {
    const product = products.find(p => p.id === params.id);

    return {
        product: product || { name: '상품 없음', price: '-', desc: '존재하지 않는 상품입니다.', img: 'https://placehold.co/400x400?text=No+Data' }
    };
};