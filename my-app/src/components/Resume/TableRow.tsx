import * as React from "react";
import TableCell from "@mui/material/TableCell";
import { StyledTableRow } from "../StyledTableRow";
import ResumeTableDeleteButton from "./DeleteIconButton";
import ResumeEdit from "./EditIconButton";
import {
  SectionAny,
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
} from "../../API/ResumeAPI";

interface ResumeRowProps {
  index: number;
  resumeEntry: SectionAny;
  sectionNumber: string;
  sectionPlusNumber: string;
  setSections: (allEntries: SectionAny[]) => void;
  priorEntries: SectionAny[];
  handleOpen: (currEntry: SectionAny, purpose: string) => void;
}

export default function ResumeTableCells({
  index,
  resumeEntry,
  sectionNumber,
  sectionPlusNumber,
  setSections,
  priorEntries,
  handleOpen,
}: ResumeRowProps) {
  switch (resumeEntry.section) {
    case 1:
      if (isS1(resumeEntry)) {
        return (
          <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.year}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.nickname}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.grade}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.club_name}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.num_in_club}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.club_leader}
            </TableCell>
            <TableCell>{resumeEntry.meetings_held}</TableCell>
            <TableCell>{resumeEntry.meetings_attended}</TableCell>
            <TableCell>
              <ResumeEdit resumeEntry={resumeEntry} handleOpen={handleOpen} />
            </TableCell>
            <TableCell>
              <ResumeTableDeleteButton id={resumeEntry.id} />
            </TableCell>
          </StyledTableRow>
        );
      }
      break;
    case 2:
      if (isS2(resumeEntry)) {
        return (
          <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.year}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.project_name}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.project_scope}
            </TableCell>
            <TableCell>
              <ResumeEdit resumeEntry={resumeEntry} handleOpen={handleOpen} />
            </TableCell>
            <TableCell>
              <ResumeTableDeleteButton id={resumeEntry.id} />
            </TableCell>
          </StyledTableRow>
        );
      }
      break;
    case 3:
      if (isS3(resumeEntry)) {
        return (
          <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.year}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.nickname}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.activity_kind}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.things_learned}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.level}
            </TableCell>
            <TableCell>
              <ResumeEdit resumeEntry={resumeEntry} handleOpen={handleOpen} />
            </TableCell>
            <TableCell>
              <ResumeTableDeleteButton id={resumeEntry.id} />
            </TableCell>
          </StyledTableRow>
        );
      }
      break;
    case 4:
      if (isS4(resumeEntry)) {
        return (
          <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.year}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.nickname}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.activity_kind}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.scope}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.level}
            </TableCell>
            <TableCell>
              <ResumeEdit resumeEntry={resumeEntry} handleOpen={handleOpen} />
            </TableCell>
            <TableCell>
              <ResumeTableDeleteButton id={resumeEntry.id} />
            </TableCell>
          </StyledTableRow>
        );
      }
      break;
    case 5:
      if (isS5(resumeEntry)) {
        return (
          <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.year}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.nickname}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.leadership_role}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.hours_spent}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.num_people_reached}
            </TableCell>
            <TableCell>
              <ResumeEdit resumeEntry={resumeEntry} handleOpen={handleOpen} />
            </TableCell>
            <TableCell>
              <ResumeTableDeleteButton id={resumeEntry.id} />
            </TableCell>
          </StyledTableRow>
        );
      }
      break;
    case 6:
      if (isS6(resumeEntry)) {
        return (
          <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.year}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.nickname}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.organization_name}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.leadership_role}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.hours_spent}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.num_people_reached}
            </TableCell>
            <TableCell>
              <ResumeEdit resumeEntry={resumeEntry} handleOpen={handleOpen} />
            </TableCell>
            <TableCell>
              <ResumeTableDeleteButton id={resumeEntry.id} />
            </TableCell>
          </StyledTableRow>
        );
      }
      break;
    case 7:
      if (isS7(resumeEntry)) {
        return (
          <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.year}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.nickname}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.club_member_activities}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.hours_spent}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.num_people_reached}
            </TableCell>
            <TableCell>
              <ResumeEdit resumeEntry={resumeEntry} handleOpen={handleOpen} />
            </TableCell>
            <TableCell>
              <ResumeTableDeleteButton id={resumeEntry.id} />
            </TableCell>
          </StyledTableRow>
        );
      }
      break;
    case 8:
      if (isS8(resumeEntry)) {
        return (
          <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.year}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.nickname}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.individual_group_activities}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.hours_spent}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.num_people_reached}
            </TableCell>
            <TableCell>
              <ResumeEdit resumeEntry={resumeEntry} handleOpen={handleOpen} />
            </TableCell>
            <TableCell>
              <ResumeTableDeleteButton id={resumeEntry.id} />
            </TableCell>
          </StyledTableRow>
        );
      }
      break;
    case 9:
      if (isS9(resumeEntry)) {
        return (
          <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.year}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.nickname}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.communication_type}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.topic}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.times_given}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.location}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.audience_size}
            </TableCell>
            <TableCell>
              <ResumeEdit resumeEntry={resumeEntry} handleOpen={handleOpen} />
            </TableCell>
            <TableCell>
              <ResumeTableDeleteButton id={resumeEntry.id} />
            </TableCell>
          </StyledTableRow>
        );
      }
      break;
    case 10:
      if (isS10(resumeEntry)) {
        return (
          <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.year}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.nickname}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.communication_type}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.topic}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.times_given}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.location}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.audience_size}
            </TableCell>
            <TableCell>
              <ResumeEdit resumeEntry={resumeEntry} handleOpen={handleOpen} />
            </TableCell>
            <TableCell>
              <ResumeTableDeleteButton id={resumeEntry.id} />
            </TableCell>
          </StyledTableRow>
        );
      }
      break;
    case 11:
      if (isS11(resumeEntry)) {
        return (
          <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.year}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.nickname}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.event_and_level}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.exhibits_or_division}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.ribbon_or_placings}
            </TableCell>
            <TableCell>
              <ResumeEdit resumeEntry={resumeEntry} handleOpen={handleOpen} />
            </TableCell>
            <TableCell>
              <ResumeTableDeleteButton id={resumeEntry.id} />
            </TableCell>
          </StyledTableRow>
        );
      }
      break;
    case 12:
      if (isS12(resumeEntry)) {
        return (
          <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.year}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.nickname}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.contest_or_event}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.recognition_received}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.level}
            </TableCell>
            <TableCell>
              <ResumeEdit resumeEntry={resumeEntry} handleOpen={handleOpen} />
            </TableCell>
            <TableCell>
              <ResumeTableDeleteButton id={resumeEntry.id} />
            </TableCell>
          </StyledTableRow>
        );
      }
      break;
    case 13:
      if (isS13(resumeEntry)) {
        return (
          <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.year}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.nickname}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.recognition_type}
            </TableCell>
            <TableCell>
              <ResumeEdit resumeEntry={resumeEntry} handleOpen={handleOpen} />
            </TableCell>
            <TableCell>
              <ResumeTableDeleteButton id={resumeEntry.id} />
            </TableCell>
          </StyledTableRow>
        );
      }
      break;
    case 14:
      if (isS14(resumeEntry)) {
        return (
          <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.year}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.nickname}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {resumeEntry.recognition_type}
            </TableCell>
            <TableCell>
              <ResumeEdit resumeEntry={resumeEntry} handleOpen={handleOpen} />
            </TableCell>
            <TableCell>
              <ResumeTableDeleteButton id={resumeEntry.id} />
            </TableCell>
          </StyledTableRow>
        );
      }
      break;
    default:
      break;
  }
}
