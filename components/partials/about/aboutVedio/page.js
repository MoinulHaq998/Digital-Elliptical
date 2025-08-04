
const VideoSection = () => {
  return (
    <section className='w-full flex justify-center items-center'>
      <div className='w-full sm:w-[80%] px-6 sm:px-12 h-auto sm:h-[80%]'>
        <div className='relative w-full h-0 pb-[56.25%]  overflow-hidden rounded-lg'>
          <video
            src={"/assets/videos/about.mp4"}
            className='absolute top-0 left-0 w-full h-full object-cover'
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection
