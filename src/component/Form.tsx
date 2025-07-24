

export const Form = () => {
  return (
    <div>
<div>
    <form  className="flex flex-col border w-[600px] mx-auto mt-[50px]  gap-40px">
        <input type="text" placeholder="Your Name" className="p-[20px] border-2 border-gray-300 border-solid " />
        <input type="text" placeholder="Your Email" className="p-[20px] border-2 border-gray-300 border-solid" />
        <input type="text" placeholder="Subject" className="p-[20px] border-2 border-gray-300 border-solid" />
       <textarea name="" id="" placeholder="Message" className ="p-[20px] border-2 border-gray-300 border-solid"></textarea>

    </form>
    
 <div className="bg-gray-800 w-[200px] rounded-3xl p-[15px] text-center mx-auto mt-[40px] text-white">
    <button >Send Message</button>

 </div>
    </div>
    </div>
  )
}
