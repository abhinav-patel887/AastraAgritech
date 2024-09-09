export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-4/12">
                      <img
                          src="src\assets\Image.webp"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Empowering Agriculture, Connecting Farmers and Consumers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Welcome to Aastra Agritech, where innovation meets tradition to revolutionize agriculture. 
                      As a pioneering agritech startup, 
                      our mission is to bridge the gap between farmers and consumers, delivering pure and organic products 
                      directly from farm to table. By eliminating middlemen, we ensure cost-effectiveness for both farmers and customers while 
                      enhancing the overall efficiency of the agriculture sector.
                      </p>
                      <p className="mt-4 text-gray-600">
                      At Aastra Agritech, we are committed to connecting farmers from every corner of India with 
                      consumers nationwide. Our extensive range of crops and 
                      agricultural products caters to diverse needs, ensuring quality and freshness with every purchase.
                       We also tackle the challenges of the manufacturing industry by combating fake brands and unhealthy 
                       products that compromise health.<br /><br />Our dedication extends to research and development, where we 
                       strive to improve environmental sustainability and uncover true nutritional benefits. 
                       Through our innovative approach, we are not only advancing agricultural practices but also 
                       fostering a healthier, more transparent food system. Join us in our journey to redefine 
                       agriculture and make a positive impact on the world.

                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}