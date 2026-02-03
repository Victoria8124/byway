import CardList from "../../entities/category/card/ui/cardList";
import CardCompactList from "../../entities/course/card-compact/ui/cardCompactList";
import StatusList from "../../entities/status/ui/statusList";
import CardUserList from "../../entities/user/card/ui/cardUserList";
import InfoSection from "../../widgets/info-section/ui/InfoSection";
import SectionHeader from "../../widgets/section-header/ui/sectionHeader";

const Home = () => {
  return (
    <>
      <InfoSection
        imageLeft={false}
        title="Unlock Your potential with Byway"
        description="Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success."
        buttonText="Start your instructor journey"
        imageSrc="/column.png"
      />

      <div className="flex flex-col gap-10 bg-[#F0F0F3] px-40 py-20">
        <StatusList />

        <SectionHeader title="Top Categories" />
        <CardList />

        <SectionHeader title="Top Courses" />
        <CardCompactList />

        <SectionHeader title="Top Courses" />
        <CardUserList />
      </div>

      <InfoSection
        title="Unlock Your potential with Byway"
        description="Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success."
        buttonText="Start your instructor journey"
        imageSrc="/image 10.png"
        imageLeft={true}
      />

      <InfoSection
        imageLeft={false}
        title="Unlock Your potential with Byway"
        description="Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success."
        buttonText="Start your instructor journey"
        imageSrc="/image 11.png"
      />
    </>
  );
};

export default Home;
