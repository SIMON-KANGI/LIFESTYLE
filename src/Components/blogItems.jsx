import React from 'react'
import image1 from '../assets/image 66.jpg'
import image2 from '../assets/image 41.png'
import image3 from '../assets/image 18.jpg'
import image4 from '../assets/image 19.jpg'
import image5 from '../assets/image 52.jpg'
import image6 from '../assets/image 43.jpg'
import image7 from '../assets/image 42.jpg'
import image8 from '../assets/image 46.jpg'
import image9 from '../assets/image 45.png'
import image10 from '../assets/image 47.jpg'
import Blogging from './Blogging'

function BlogItems() {
    const Blogs=[
{
    id:1,
    img:image1,
    name:'Kiss and Tell: The secrets your lips say about your health',
    details:'Listen to what your lips are saying because the lips are mirrors that reflect your general well-being.'
},
{
    id:2,
    img:image2,
    name:'BAREFOOT WALKING: 7 Benefits of Grounding Your Feet',
    details:'Walking barefoot, also known as barefoot walking or grounding, has several benefits for human beings. Here are <br/>seven reasons why regular barefoot walking can be beneficial to your body, mind and soul:'
},
{
    id:3,
    img:image3,
    name:'BREAKFAST: 10 benefits of skipping morning breakfast',
    details:'In the modern sedentary lifestyle, most people eat morning<br/> breakfast because it is a cultural fulfilment, not a nutritional<br/> necessity....'
},
{
    id:4,
    img:image4,
    name:'MOUTHWASH: Why you should avoid them.',
    details:'Bad breath can be disastrous not only to the people next to you but also to your self-esteem. Once you realize your mouth<br/> emits bad...'
},
{
    id:5,
    img:image5,
    name:'MASTURBATION: 10 Reasons why you are relapsing',
    details:'Listen to what your lips are saying because the lips are mirrors that reflect your general well-being.'
},
{
    id:6,
    img:image6,
    name:'ENDOMETRIOSIS: How to naturally reverse it without pills and surgery',
    details:'I know you have heard about this condition or your close relative or friend has been diagnosed with it. What is<br/> endometriosis? Can...'
},
{
    id:7,
    img:image7,
    name:'MORNING BREAKFAST: The most meaningless meal of the day.',
    details:"There's nothing healthy or nutritious about a morning meal. In medieval Europe, eating early in the day was only a necessity for those..."
},
{
    id:8,
    img:image8,
    name:'BEST II: The best approach to reversing anxiety disorders & mental depression without',
    details:'This is the last blog post about reversing anxiety disorders and depression without using medicines. In <br/>the previous part, I introduced...'
},
{
    id:9,
    img:image9,
    name:'BEST: The best approach to reversing anxiety disorders & mental depression without',
    details:'In the previous blog posts about depression, I raised an alarm over the debilitating side effects of anti-<br/>depressants. I explained in...'
},
{
    id:10,
    img:image10,
    name:' DEADLY DOUGH: 5 reasons why you should stop eating wheat',
    details:'Wheat has become a common meal on the meal table  but is wheat a good meal? Modern wheat is genetically<br/> farmed, highly refined and finely...'
},

    ]
  return (
    <div>
      {
        Blogs.map((blog, id)=>{
return(
    <>
    <Blogging
    key={blog.id}
    image={blog.img}
    name={blog.name}
    detail={blog.details}
    
    />
    
    </>
)
        })
      }
    </div>
  )
}

export default BlogItems
