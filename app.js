const food = [
    {
        img:'https://recipe1.ezmember.co.kr/cache/recipe/2016/10/21/425eb58627c7aad48f26bf7ae1578aea1.jpg',
        name:'식빵 러스크',
        ingredient: '식빵, 버터 , 설탕 , 소금 , 설탕 , 시나몬가루',
        id:'tost'
    },
    {
        img:'https://t1.daumcdn.net/cfile/tistory/9905F9345F3F741532',
        name:'햄치즈 파니니',
        ingredient:'식빵 , 체다슬라이스치즈 , 샌드위치햄 , 모짜렐라치즈 , 딸기잼,허니머스타드, 버터 ',
        id:'tost'
    },
    {
        img:'https://dimg.donga.com/wps/NEWS/IMAGE/2014/02/25/61176123.4.jpg',
        name:'허니브레드',
        ingredient: '통식빵 또는 식빵 , 버터 , 설탕 , 꿀 또는 올리고당 , 선택재료: 생크림,크림치즈 과일',
        id:'tost'
    },
    {
        img:'https://recipe1.ezmember.co.kr/cache/recipe/2017/11/21/8cb4b9f30e3570f4ff93dd3303eeff7f1.jpg',
        name:'돼지고기 찜',
        ingredient: '통삼겹살 , 묵은지 , 파한단, 된장, 쌀뜨물 , 설탕, 고춧가루 , 참치액',
        id:'pork'
    },
    {
        img: 'https://static.hubzum.zumst.com/hubzum/2018/06/12/13/695f5d83a7e74f6ea8221daf863cf1db.jpg',
        name:'돼지수육',
        ingredient:'삼겹살 , 양파, 사과, 대파, 된장, 다진마늘, 후추',
        id:'pork',
    },
    {
        img: 'http://thumbnail.10x10.co.kr/webimage/image/basic600/112/B001127189-1.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false',
        name:'에그샐러드',
        ingredient:'계란 , 설탕 , 식초 , 마요네즈 , 후춧가루 , 소금 ',
        id:'egg',
    },
    {
        img: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/09/06/f63373ea9eeddbbe0d5a7db5619bb77e1.jpg',
        name:'계란 장조림',
        ingredient:'계란 , 꽈리고추 , 통마늘 , 청양고추 , 다시마 육수 , 간장 , 설탕 ',
        id:'egg',
    },
    {
        img: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/14/b175ab9b624c3376fa193630ebdbe6731.jpg',
        name:'고등어 무조림',
        ingredient:'고등어 , 무 , 양파 , 홍고추 , 청양고추 , 대파, 물 , 설탕 , 된장 , 다진마늘 , 고춧가루 , 생강 즙 , 들기름 , 간장 ',
        id:'mackerel',
    },
    {
        img: 'https://recipe1.ezmember.co.kr/cache/recipe/2017/05/18/a1f159cfc25bd4c7cb7bc08680ebb6f81.jpg',
        name:'스팸마요덮밥',
        ingredient:'스팸 , 계란 , 우유 , 양파 , 대파 , 마요네즈 , 설탕 , 간장 , 버터',
        id:'ham',
    },
    {
        img: 'https://img.mimint.co.kr/food/bbs/2012/2/20/865620120220113837r.jpg',
        name:'참치동그랑떙',
        ingredient:'참치캔, 양파, 대파, 마늘, 계란, 부침가루, 식용유',
        id:'tuna',
    },
    {
        img: 'https://shop.hansalim.or.kr/om/is/fo/img/%EC%B0%A8%EB%8F%8C%EB%B0%95%EC%9D%B4%EC%88%99%EC%A3%BC%EB%B3%B6%EC%9D%8C_1.jpg',
        name:'차돌박이 숙주볶음',
        ingredient:'숙주, 차돌박이, 홍고추, 청양고추, 대파, 진간장, 굴소스, 설탕, 맛술, 후춧가루, 간마늘, 통깨',
        id:'beefBrisket',
    },
    {
        img: 'https://i.ytimg.com/vi/8Ei56Dj3z3g/maxresdefault.jpg',
        name:'마파두부',
        ingredient:'두부, 스팸, 대파, 양파, 물, 돤장, 고추장, 고춧가루, 진간장, 다진마늘, 설탕, 참기름, 통깨',
        id:'tofu',
    },
    {
        img: 'https://blog.kakaocdn.net/dn/0MuGX/btqRptLuFkZ/TUFZUW1jiuDfUvoDmLyUdk/img.jpg',
        name:'새우 크림파스타',
        ingredient:'스파게티면, 식용유, 마늘, 양파, 베이컨, 새우, 김치, 양송이버섯, 시판크림소스, 우유, 후추, 소금',
        id:'noodles',
    },
    {
        img: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MDNfMjQy/MDAxNTYyMTA3NTYyNDEz.erIa9HHcM6ecX32yEH78MZadRxEzSfdmj5yD7FjFTscg.QhXsTt-shNrazg712CWmR41owED9LORINUyhKoO09ZAg.JPEG.wjs6235/1562107540839.jpg?type=w800',
        name:'감자튀김',
        ingredient:'감자, 오일, 갈릭솔트 또는 허브솔트,파슬리가루',
        id:'potato',
    },
    {
        img: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F99BD993A5B3DB00921C75E',
        name:'오징어 볶음',
        ingredient:'오징어, 대파, 양파, 양배추, 당근, 간마늘, 설탕, 고추장, 진간장, 고춧가루, 물, 참기름, 후춧가루',
        id:'squid',
    },
    {
        img: 'https://craftlog.com/m/i/5915356=s1280=h960',
        name:'표고버섯볶음',
        ingredient:'표고버섯, 파프리카, 양파, 다진마늘, 간장, 굴소스, 맛술, 올리고당, 소금, 식용유, 참기름, 통깨',
        id:'mushroom',
    },
    {
        img: 'https://recipe1.ezmember.co.kr/cache/recipe/2017/08/30/9b6bf3ff8baa94998edd03d41768cd641.jpg',
        name:'크림새우',
        ingredient:'냉동 칵테일 새우, 소주, 맛술, 소금, 후추, 튀김가루, 탄산수, 마요네즈, 레몬청',
        id:'shrimp',
    },
    {
        img: 'https://recipe1.ezmember.co.kr/cache/recipe/2020/08/05/1142e9061d9f597026e93de8bbd9bf341.jpg',
        name:'옥수수 전',
        ingredient:'캔옥수수, 튀김가루, 물, 슈레드 모짜렐라치즈',
        id:'corn',
    },
    {
        img: 'https://recipe1.ezmember.co.kr/cache/recipe/2019/03/14/f186adc98c942f1b2e2fc80ffd2892d91.jpg',
        name:'어묵 볶음',
        ingredient:'사각 어묵, 양파, 대파, 청양고추, 홍고추, 다진마늘, 식용유, 진간장, 굴소스, 설탕, 물, 고운고춧가루, 침기름, 후추, 깨',
        id:'fishCake',
    },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // },
    // {
    //     img: '',
    //     name:'',
    //     ingredient:'',
    //     id:'',
    // }

]

const btns = document.querySelectorAll('.keyword span');
const innerFood = document.querySelector('.click-show');
const first = document.querySelector('#first');
const second = document.querySelector('#second');

window.addEventListener('load', function(){
    put(food);
    random();
    randomSecond()
})

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const btnData = e.target.dataset.food;
    
        const fillter = food.filter(function (same){
            if (same.id == btnData) {
                return same;
            }
        });

        put(fillter);

        
    });
});


function put(foodHeng) {

    const mapFood = foodHeng.map(function(a) {
        return `     
        <div class="food">
            <div class="food-img">
                    <img src="${a.img}" alt="">
                </div>
                <div class="food-text">
                    <h5>${a.name}</h5>
                    <div class="ingredient">
                        <p>재료 : </p>
                        <span>${a.ingredient}</span>
                    </div>
                </div>
        </div>`
    });
    const mapfoodDeletComoma = mapFood.join('');
    innerFood.innerHTML = mapfoodDeletComoma;
}

function random() {
    let random = food[Math.floor(Math.random() * food.length)];

    const foodRandom = food.map(function(a){
        return `           
         <div class="food-img">
        <img src="${random.img}" alt="">
    </div>
    <div class="food-text">
        <h5>${random.name}</h5>
        <div class="ingredient">
            <p>재료 : </p>
            <span>${random.ingredient}</span>
        </div>
    </div>`
    })

    const show = foodRandom.slice(0,1)
    first.innerHTML = show;

    
}

function randomSecond() {

    const random = food[Math.floor(Math.random() * food.length)];


    const foodRandom = food.map(function(){
        return `           
         <div class="food-img">
        <img src="${random.img}" alt="">
    </div>
    <div class="food-text">
        <h5>${random.name}</h5>
        <div class="ingredient">
            <p>재료 : </p>
            <span>${random.ingredient}</span>
        </div>
    </div>`
    })

    const show = foodRandom.slice(0,1)
    second.innerHTML = show;

}

btns.forEach(function(btn){
    btn.addEventListener('click', myFunction)
});

function myFunction(e) {
    var el = document.querySelector('.active');
  
    if(el) {
      el.classList.remove('active');
    }
		
    e.target.classList.add('active');
}