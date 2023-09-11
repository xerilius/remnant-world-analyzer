import { removeInvalidChars } from "./strings";

export const parseData = (data: string) => {
  const sanitizedData = removeInvalidChars(data);
  const gameModeData = getGameModeData(sanitizedData);

  return sanitizedData;
};
const getCampaignData = (data: string) => {
  const campaignPath = "/Game/Campaign_Main/";
  const campaignPathStart =
    `${campaignPath}` + "Quest_Campaign_City.Quest_Campaign_City";
  const campaignPathEnd =
    `${campaignPath}` + "Quest_Campaign_Main.Quest_Campaign_Main_C";

  const indexStart = data.indexOf(campaignPathStart);
  const indexEnd = data.indexOf(campaignPathEnd);
};

const getGameModeData = (data: string) => {
  const campaignPath = "/Game/Campaign_Main/";
  let campaignData = data.split(
    `${campaignPath}` + "Quest_Campaign_Ward13.Quest_Campaign_Ward13"
  )[0];
  const mainCampaign = data.split(
    `${campaignPath}}` + "Quest_Campaign_City.Quest_Campaign_City"
  )[1];
  console.log(
    data.search("/Game/Campaign_Main/Quest_Campaign_Main.Quest_Campaign_Main_C")
  );
  if (mainCampaign) {
    campaignData = mainCampaign.replace(/Game/g, "\n");
  }
  return campaignData;
};

const getAdventureData = (data: string) => {
  console.log(data.search("Quest_AdventureMode_"));
};

const getModeData = (data: string) => {};
