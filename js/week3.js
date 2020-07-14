var vue = new Vue({
    el:'#app',
    data:{
        products:[{ //商品資料整理
            id: "qZPFrO9kokdJWTLWzr51yWtAzVWHRZLYMddOWrpxOpYaTxqJ5epIPJ2JQhtq6KuC",
            title: "ねこチラ",
            category: "本、雑誌",
            content: "壁からチラ。箱からチラ。ねこのチラリズム集めました。",
            imageUrl:
                    "https://upload.cc/i1/2020/07/02/2tX4AV.jpg"
                ,
            enabled: true,
            origin_price: 1200,
            price: 1200,
            unit: "冊"
        },{
            id: "EoRdIONNP9u13uV4AnkFhbYzXz0y7ULkGwx0X2L8IsJY8majP7yOT10fsKUXTb4f",
            title: "ねこのおくち",
            category: "本、雑誌",
            content: "ねこの口元を愛する、すべてのマズラーの皆さまへ",
            imageUrl:
                "https://upload.cc/i1/2020/07/02/DvcBGQ.jpg"
                ,
            enabled: true,
            origin_price: 920,
            price: 920,
            unit: "冊"
        },{
            id: "IwiJYIrvL3Or6DIAnPnRCSQ50AZ1QCEB9tiJszpoV7AXan4hNmHzGugdSWPWS0do",
            title: "ねこさま名鑑100",
            category: "本、雑誌",
            content: "“推しねこ”がきっと見つかる、オールスターねこ名鑑本",
            imageUrl:
                 "https://upload.cc/i1/2020/07/02/GcpFf5.jpg"
                ,
            enabled: false,
            origin_price: 1200,
            price: 1200,
             unit: "冊"
        },
    ],
        tempProduct:{}, //新增商品用
    },
    methods: {
        updateProduct() {//新增
            if(this.tempProduct.id){
                const id = this.tempProduct.id;
                this.products.forEach((item,i)=>{
                    if(item.id === id){
                        this.products[i] = this.tempProduct;
                    }
                });
            }else{
                //取 Unix 時間
                const id = new Date().getTime();
                this.tempProduct.id = id;
                this.products.push(this.tempProduct);
            }
            this.tempProduct={};
            $('#productModal').modal('hide'); // 隱藏新增商品視窗
        },
        openModal(isNew,item){ 
            switch(isNew){
                case 'new':
                    this.tempProduct = {};
                    $('#productModal').modal('show'); //打開新增商品視窗
                    break;
                case 'edit':
                    this.tempProduct = JSON.parse(JSON.stringify(item)); //拷貝資料
                    $('#productModal').modal('show');
                    break;
                case 'delete':
                    $('#delProductModal').modal('show');
                    this.tempProduct = JSON.parse(JSON.stringify(item));
                    break;
                default:
                    break;
            }
        },
        delProduct(){ // 刪除商品
            if(this.tempProduct.id){
                const id = this.tempProduct.id;
                this.products.forEach((item,i)=>{
                    if(item.id === id){
                        this.products.splice(i, 1);
                        this.tempProduct = {};
                    }
                });
            }
            $('#delProductModal').modal('hide');
        },
    },
});




