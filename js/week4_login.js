
// UUID & api 路徑
const uuid = '5422afca-aaf4-4f91-8fb3-26f0be87e307';
const apiPath = 'https://course-ec-api.hexschool.io/api/';

let vue = new Vue ({
    el : "#app",
    data(){
        return{
            user:{
                email:'',
                password:'',
            },
            token:''
        };
    },
    methods: {
        signin(){
            const api = `${apiPath}auth/login` ; // 大家用一樣ㄉＡＰＩ所以不用帶ＵＵ哎低
            axios.post(api, this.user).then((response) => { 
                console.log(response)
                const token = response.data.token ;
                const expired = response.data.expired ; // 到期日的值

                document.cookie = `sonykoToken=${token}; expires=${new Date(expired * 1000)}; path=/`; //轉換成時間格式存起來
            }).catch((error)=>{
                console.log(error);
            });
        },
        signout(){
            document.cookie = `sonykoToken=; expires=; path=/`;
        },
        getData(){//如何將cookie取出
            this.token = document.cookie.replace(/(?:(?:^|.*;\s*)sonykoToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            console.log('token',this.token)
        }
    },



})