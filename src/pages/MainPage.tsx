const MainPage = () => {
  return (
    <div className='flex flex-col w-full gap-[10px]'>
      <div className='flex text-[36px] text-[#ff0000] font-semibold italic'>
        Stick to ( )
      </div>
      <div className='relative w-full' style={{ paddingBottom: '56.25%' }}>
        <iframe
          className='absolute top-0 left-0 w-full h-full'
          src='https://www.youtube.com/embed/FjMC0D8Udxc'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
      <div className='flex flex-col'>
        <div className='flex text-[36px] font-normal italic'>
          Perfomance 08:30
        </div>
        <div className='flex text-[36px] font-normal italic'>Video 06:30</div>
      </div>
      <div className='flex flex-col'>
        <div className='flex text-[36px] font-normal italic'>Choreography</div>
        <div className='flex text-[36px] font-normal italic'>Videography</div>
        <div className='flex text-[36px] font-normal italic justify-end'>
          by JI EUN YOO
        </div>
      </div>
      <div className='flex flex-col gap-[10px]'>
        <div className='flex text-[36px] font-normal italic'>Performers</div>
        <div className='flex text-[36px] font-normal italic justify-end'>
          <div className='flex'>한도영 HAN DO YOUNG</div>
        </div>
        <div className='flex text-[36px] font-normal italic justify-end'>
          <div className='flex'>안소현 AN SO HYUN</div>
        </div>
        <div className='flex text-[36px] font-normal italic justify-end'>
          <div className='flex'>조수현 JOH SU HYUN</div>
        </div>
        <div className='flex text-[36px] font-normal italic justify-end'>
          <div className='flex'>서지우 SEO JI WOO</div>
        </div>
        <div className='flex text-[36px] font-normal italic justify-end'>
          <div className='flex'>최혜민 CHOI HYE MIN</div>
        </div>
      </div>
      <div className='flex text-[15px] italic'>
        Stick to person, money, love, myself, fame, nothing, religion, food,
        dog, cat, faith, job, health, fashion, whatever,,,,,,,,, 스스로 서 있을
        수 없는 몸과 스틱, 두 존재의 서로를 향한 기댐은 두 존재가 모두 서 있는
        순간도 있지만 이내 쓰러지고 만다. 두 존재는 끊임없이 흔들리지만 지속된
        흔들림이 춤이 되기 시작한다. The bodies, unable to stand on their own,
        rely on a stick—two entities that lean on each other. There are moments
        when they both stand together, yet inevitably, they fall. These two
        beings are constantly shaking, but over time, the continuous tremor
        transforms into a dance. In this vast world, there are things we lean on
        to avoid being shaken. What once served as a pillar of support can
        sometimes feel as fragile as a long, thin stick. This imperfection has
        led me on a journey through the world, and these fleeting moments of
        movement have, in turn, returned to me as dance. As the performers’
        bodies sway and shift, the locations and backgrounds constantly evolve
        as well. The focus is not on imperfection or lack, but on the journey
        and the process itself. The continuous trembling becomes the driving
        force behind the movements, and the state of drifting transforms into a
        process that symbolizes the fluidity of life, vitality, and the
        never-ending progression of existence. 흔들리며 움직이는 퍼포머들의 몸과
        함께 장소와 배경 또한 끊임없이 전환이 됩니다. 불완전함과 결핍의 상태가
        초점이 아닌 그것이 주는 여정, 과정에 초점을 두었습니다. 지속되는
        흔들림이 움직임의 원동력으로 작동하고 표류의 상태가 삶의 유동성, 생명력,
        지속적인 과정으로 전환되는 과정으로 보여주고자 합니다.
      </div>
    </div>
  );
};

export default MainPage;
