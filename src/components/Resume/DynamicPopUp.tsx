import React, { useState, useEffect } from "react";
import { getAccessToken } from "@auth0/nextjs-auth0";
import InputsBySection from "@/components/Resume/InputsBySection";
import { OverlayModelCRUD } from "@/components/OverlayModal";
import {
  SectionAny,
  updateSection,
  postSection,
  SectionEmpty,
  isS1,
  isS2,
  isS3,
  isS4,
  isS5,
  isS6,
  isS7,
  isS8,
  isS9,
  isS10,
  isS11,
  isS12,
  isS13,
  isS14,
} from "@/API/ResumeAPI";

interface PopUpProps {
  sectionNumber: string;
  setSections: (allEntries: SectionAny[]) => void;
  priorEntries: SectionAny[];
  resumeEntry: SectionAny;
  handleModalClose: () => void;
  handleOpen: (currEntry: SectionAny, purpose: string) => void;
  purpose: string;
}

export default function DynamicPopUp({
  purpose,
  sectionNumber,
  resumeEntry,
  setSections,
  priorEntries,
  handleModalClose,
}: PopUpProps) {
  // map to store key value pairs for body of request
  const [mapState, setMapState] = useState(new Map());
  const [accessToken, setAccessToken] = useState("");
  const updateMap = (key: string, value: number | string) => {
    setMapState((map) => new Map(map.set(key, value)));
  };

  useEffect(() => {
    if (purpose == "edit") {
      switch (sectionNumber) {
        case "1":
          if (isS1(resumeEntry)) {
            updateMap("year", resumeEntry.year);
            updateMap("nickname", resumeEntry.nickname);
            updateMap("club_leader", resumeEntry.club_leader);
            updateMap("club_name", resumeEntry.club_name);
            updateMap("grade", resumeEntry.grade);
            updateMap("num_in_club", resumeEntry.num_in_club);
            updateMap("meetings_held", resumeEntry.meetings_held);
            updateMap("meetings_attended", resumeEntry.meetings_attended);
          }
          break;
        case "2":
          if (isS2(resumeEntry)) {
            updateMap("year", resumeEntry.year);
            updateMap("project_name", resumeEntry.project_name);
            updateMap("project_scope", resumeEntry.project_scope);
          }
          break;
        case "3":
          if (isS3(resumeEntry)) {
            updateMap("year", resumeEntry.year);
            updateMap("nickname", resumeEntry.nickname);
            updateMap("activity_kind", resumeEntry.activity_kind);
            updateMap("things_learned", resumeEntry.things_learned);
            updateMap("level", resumeEntry.level);
          }
          break;
        case "4":
          if (isS4(resumeEntry)) {
            updateMap("year", resumeEntry.year);
            updateMap("nickname", resumeEntry.nickname);
            updateMap("activity_kind", resumeEntry.activity_kind);
            updateMap("scope", resumeEntry.scope);
            updateMap("level", resumeEntry.level);
          }
          break;
        case "5":
          if (isS5(resumeEntry)) {
            updateMap("year", resumeEntry.year);
            updateMap("nickname", resumeEntry.nickname);
            updateMap("leadership_role", resumeEntry.leadership_role);
            updateMap("hours_spent", resumeEntry.hours_spent);
            updateMap("num_people_reached", resumeEntry.num_people_reached);
          }
          break;
        case "6":
          if (isS6(resumeEntry)) {
            updateMap("year", resumeEntry.year);
            updateMap("nickname", resumeEntry.nickname);
            updateMap("organization_name", resumeEntry.organization_name);
            updateMap("leadership_role", resumeEntry.leadership_role);
            updateMap("hours_spent", resumeEntry.hours_spent);
            updateMap("num_people_reached", resumeEntry.num_people_reached);
          }
          break;
        case "7":
          if (isS7(resumeEntry)) {
            updateMap("year", resumeEntry.year);
            updateMap("nickname", resumeEntry.nickname);
            updateMap(
              "club_member_activities",
              resumeEntry.club_member_activities
            );
            updateMap("hours_spent", resumeEntry.hours_spent);
            updateMap("num_people_reached", resumeEntry.num_people_reached);
          }
          break;
        case "8":
          if (isS8(resumeEntry)) {
            updateMap("year", resumeEntry.year);
            updateMap("nickname", resumeEntry.nickname);
            updateMap(
              "individual_group_activities",
              resumeEntry.individual_group_activities
            );
            updateMap("hours_spent", resumeEntry.hours_spent);
            updateMap("num_people_reached", resumeEntry.num_people_reached);
          }
          break;
        case "9":
          if (isS9(resumeEntry)) {
            updateMap("year", resumeEntry.year);
            updateMap("nickname", resumeEntry.nickname);
            updateMap("communication_type", resumeEntry.communication_type);
            updateMap("topic", resumeEntry.topic);
            updateMap("times_given", resumeEntry.times_given);
            updateMap("location", resumeEntry.location);
            updateMap("audience_size", resumeEntry.audience_size);
          }
          break;
        case "10":
          if (isS10(resumeEntry)) {
            updateMap("year", resumeEntry.year);
            updateMap("nickname", resumeEntry.nickname);
            updateMap("communication_type", resumeEntry.communication_type);
            updateMap("topic", resumeEntry.topic);
            updateMap("times_given", resumeEntry.times_given);
            updateMap("location", resumeEntry.location);
            updateMap("audience_size", resumeEntry.audience_size);
          }
          break;
        case "11":
          if (isS11(resumeEntry)) {
            updateMap("year", resumeEntry.year);
            updateMap("nickname", resumeEntry.nickname);
            updateMap("event_and_level", resumeEntry.event_and_level);
            updateMap("exhibits_or_division", resumeEntry.exhibits_or_division);
            updateMap("ribbon_or_placings", resumeEntry.ribbon_or_placings);
          }
          break;
        case "12":
          if (isS12(resumeEntry)) {
            updateMap("year", resumeEntry.year);
            updateMap("nickname", resumeEntry.nickname);
            updateMap("level", resumeEntry.level);
            updateMap("contest_or_event", resumeEntry.contest_or_event);
            updateMap("recognition_received", resumeEntry.recognition_received);
          }
          break;
        case "13":
          if (isS13(resumeEntry)) {
            updateMap("year", resumeEntry.year);
            updateMap("nickname", resumeEntry.nickname);
            updateMap("recognition_type", resumeEntry.recognition_type);
          }
          break;
        case "14":
          if (isS14(resumeEntry)) {
            updateMap("year", resumeEntry.year);
            updateMap("nickname", resumeEntry.nickname);
            updateMap("recognition_type", resumeEntry.recognition_type);
          }
          break;
        default:
          break;
      }
    }
  }, [purpose, resumeEntry, sectionNumber]);

  switch (purpose) {
    case "edit":
      // effect to store entry's exsiting key values in map
      // input fields will override exsisting key values when they are changed

      // function to send PUT update request to backend
      const handleUpdate = async () => {
        console.log(JSON.stringify(Object.fromEntries(mapState)));
        const postData = async () => {
          try {
            if (accessToken == "") {
              const token = await getAccessToken();
              setAccessToken(token);
              const sectionData = await updateSection<SectionAny>(
                token,
                `section${sectionNumber}`,
                resumeEntry.id,
                JSON.stringify(Object.fromEntries(mapState))
              );
              console.log(sectionData);
              setSections(
                priorEntries.map((item) =>
                  item.id === sectionData.id ? sectionData : item
                )
              );
              handleModalClose();
            } else {
              const sectionData = await updateSection<SectionAny>(
                accessToken,
                `section${sectionNumber}`,
                resumeEntry.id,
                JSON.stringify(Object.fromEntries(mapState))
              );
              console.log(sectionData);
              setSections(
                priorEntries.map((item) =>
                  item.id === sectionData.id ? sectionData : item
                )
              );
              handleModalClose();
            }
          } catch (error) {
            console.error(error);
          }
        };
        postData();
      };

      return (
        <OverlayModelCRUD
          handleCRUD={handleUpdate}
          handleClose={handleModalClose}
          title="EDIT"
        >
          <InputsBySection
            updateMap={updateMap}
            sectionNumber={sectionNumber}
            resumeEntry={resumeEntry}
          />
        </OverlayModelCRUD>
      );
    case "create":
      // function to send POST create request to backend
      const handleCreate = async () => {
        console.log(JSON.stringify(Object.fromEntries(mapState)));
        const postData = async () => {
          try {
            if (accessToken == "") {
              const token = await getAccessToken();
              setAccessToken(token);
              console.log(token);
              console.log(`section${sectionNumber}`);
              console.log(JSON.stringify(Object.fromEntries(mapState)));
              const sectionData = await postSection<SectionAny>(
                token,
                `section${sectionNumber}`,
                JSON.stringify(Object.fromEntries(mapState))
              );
              console.log(sectionData);
              setSections([...priorEntries, sectionData]);
              handleModalClose();
            } else {
              const sectionData = await postSection<SectionAny>(
                accessToken,
                `section${sectionNumber}`,
                JSON.stringify(Object.fromEntries(mapState))
              );
              console.log(sectionData);
              setSections([...priorEntries, sectionData]);
              handleModalClose();
            }
          } catch (error) {
            console.error(error);
          }
        };
        postData();
      };

      const empty: SectionEmpty = {
        id: "",
        section: -1,
        user_id: "",
        created: "",
        updated: "",
      };
      return (
        <OverlayModelCRUD
          handleCRUD={handleCreate}
          handleClose={handleModalClose}
          title="CREATE"
        >
          <InputsBySection
            updateMap={updateMap}
            sectionNumber={sectionNumber}
            resumeEntry={empty}
          />
        </OverlayModelCRUD>
      );
    default:
      break;
  }
}
