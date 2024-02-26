const users = {id : 21,name : 'Mehebul Alif', dept : 'Compuetr'};
const stringfye = JSON.stringify(users);
console.log(stringfye)
console.log(users);


const shop ={
    owner : 'Mehebul Alif',
    address: {
        village : 'Kazihata',post : 'Satbaria',thana:'Bheramara',district:'Kushtia'
        
    },
    products:['laptop','Mobile','Computer','cc camera','Tap','smart Watch'],
    isOpen :true,
    isNew:false,

  
}
const jsonShop =JSON.stringify(shop);
const jsonobj =  JSON.parse(jsonShop);
console.log(jsonobj)
console.log(jsonShop)
console.log(shop)