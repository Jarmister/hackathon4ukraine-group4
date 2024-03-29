

export default function TagPanel() {


  return (
    <div className="flex justify-center">
      <div class="flex-col ">
        <div class="py-10">
          <h1 className="text-lg  flex justify-center ">Be Informed. Stay Safe</h1>
        </div>
        <div class="flex flex-row my-5">
          <div class="flex space-x-2 justify-center ">
            <div>
              <button type="button" class="inline-block px-6 py-2  text-gray-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5  transition duration-150 ease-in-out">
                Poland</button>
              <button type="button" class="inline-block px-6 py-2   text-gray-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5  transition duration-150 ease-in-out">
                Germany</button>
              <button type="button" class="inline-block px-6 py-2 text-gray-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5  transition duration-150 ease-in-out">
                Slovakia</button>
              <button type="button" class="inline-block px-6 py-2   text-gray-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5  transition duration-150 ease-in-out">
                Romania</button>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}




