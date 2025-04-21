import React from 'react'
import Card from '../card/Card'

const Info = ({activeTab}) => {

  const basicDetails={
    pizzas:{
        title:"Pizzas",
        description:"Explore our great range of pizza recipes from the Pizza Hut pizza menu.",
        products:[
          {
            img:"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
            title:"Kadai Panner",
            desc:"Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce",
          },
          {
            img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
            title: "Classic Corn",
            desc: "Pizza topped with our classic pan sauce, sweet corn and a flavourful dressing. An all time favorite"
          },
          {
            img:"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
            title: "Spicy Sweet corn Onion & Green Chilli",
            desc: "Pizza topped with a spicy tandoori sauce, juicy sweet corn, crunchy onion & spicy green chilli and a flavourful dressing."
          },
          {
            img:"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/classic-onion-capsicum-pan-personal.dad788ecbd3fcc57366462827e31ee05.1.jpg?width=251",
            title: "Chatpata Tomato Onion & Chilli",
            desc: "Pizza topped with a spicy tandoori sauce, juicy tomato, crunchy onion & green chilli for an extra zing and a flavourful dressing."
          },
          {
            img:"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chatpata-tomato-onion-&-chilli-pan-personal.47f1c177432d17148978e2860a04ba81.1.jpg?width=251",
            title: "Cheesy Spicy Delight",
            desc: "Pizza topped with 100% mozzarella cheese, a flavourful dressing, onion and spicy green chilli, sprinkled with our signature spiced seasoning."
          },
          {
            img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/cheesy-spicy-delight-pan-personal.db100259b25697e9a79948aed047d1b8.1.jpg?width=251",
            title: "Chilli Paneer Sizzle",
            desc: "Indulge in a royal delight with juicy marinated paneer, tomato, onion, and a sauce packed with rich, aromatic spices."
          },
          {
            img:"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/cheesy-spicy-delight-pan-personal.db100259b25697e9a79948aed047d1b8.1.jpg?width=251",
            title: "Schezwan Margherita",
            desc: "Indulge in a royal delight with juicy marinated paneer, tomato, onion, and a sauce packed with rich, aromatic spices."
          },
          {
            img:"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chilli-paneer-sizzle-pan-personal.51d3b0f91a8c6109303824bc62300825.1.jpg?width=251",
            title: "Corn & Cheese",
            desc: "Indulge in a royal delight with juicy marinated paneer, tomato, onion, and a sauce packed with rich, aromatic spices."
          },
          {
            img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/bold-bbq-veggies.8cd7bdc4b90ad70c7acfbfdf86a812a1.1.jpg?width=251",
            title: "Kadhai Paneer",
            desc: "Indulge in a royal delight with juicy marinated paneer, tomato, onion, and a sauce packed with rich, aromatic spices."
          }
        ]
    },
    sides:{
         title:"Sides",
        description:"Explore our great choice of delicious sides to complement your pizzas",
        products:[
          {
            img:"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
            title:"Kadai Panner",
            desc:"Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce",
          },
          {
            img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
            title: "Classic Corn",
            desc: "Pizza topped with our classic pan sauce, sweet corn and a flavourful dressing. An all time favorite"
          },
        ]
    },
    desserts:{
         title:"Desserts",
        description:"Explore our tempting choice of delicious desserts. Available for delivery and collection.",
        products:[
          {
            img:"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
            title:"Kadai Panner",
            desc:"Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce",
          },
          {
            img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
            title: "Classic Corn",
            desc: "Pizza topped with our classic pan sauce, sweet corn and a flavourful dressing. An all time favorite"
          },
        ]
    },
    drinks:{
         title:"Drinks",
        description:"Explore our great selection of refreshing drinks",
        products:[
          {
            img:"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
            title:"Kadai Panner",
            desc:"Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce",
          },
          {
            img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
            title: "Classic Corn",
            desc: "Pizza topped with our classic pan sauce, sweet corn and a flavourful dressing. An all time favorite"
          },
        ]
    },
    deals:{
         title:"Deals",
        description:"Check out the latest meal deals available from Pizza Hut",
        products:[
          {
            img:"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
            title:"Kadai Panner",
            desc:"Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce",
          },
          {
            img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
            title: "Classic Corn",
            desc: "Pizza topped with our classic pan sauce, sweet corn and a flavourful dressing. An all time favorite"
          },
        ]
    },

  }
 
  return (
    <div className=' w-4/5  flex flex-col  items-center mx-auto '>
      <h1 className='text-center text-4xl font-semibold my-4'>Our {basicDetails[`${activeTab}`].title}</h1>
      <p className='text-center text-xl my-5'>{basicDetails[`${activeTab}`].description}</p>
      <div className='flex flex-wrap gap-5 justify-center'>
       {
        basicDetails[`${activeTab}`].products.map((data,index)=>{
          return <Card key={index} image={data.img} title={data.title} desc={data.desc} />
        })
       }
      </div>
    </div>
  )
}

export default Info