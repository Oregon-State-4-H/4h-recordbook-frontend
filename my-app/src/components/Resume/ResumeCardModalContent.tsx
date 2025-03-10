import * as React from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
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
  resumeEntry: SectionAny;
}

export default function ResumeTableCells({ resumeEntry }: ResumeRowProps) {
  switch (resumeEntry.section) {
    case 1:
      if (isS1(resumeEntry)) {
        return (
          <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
            <Typography gutterBottom sx={{ fontSize: 14 }}>
              {resumeEntry.year}
            </Typography>
            <Typography variant="h5" component="div" marginBottom="20px">
              {resumeEntry.nickname}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Grade:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.grade}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Name of Club/Group
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.club_name}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Number in Club/Group
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.num_in_club}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Club Leader
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.club_leader}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Meetings Held
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.meetings_held}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Meetings Attended
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.meetings_attended}
            </Typography>
          </CardContent>
        );
      }
      break;
    case 2:
      if (isS2(resumeEntry)) {
        return (
          <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
            <Typography gutterBottom sx={{ fontSize: 14 }}>
              {resumeEntry.year}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Project Name:
            </Typography>
            <Typography variant="h5" component="div" marginBottom="20px">
              {resumeEntry.project_name}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Project Scope:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.project_scope}
            </Typography>
          </CardContent>
        );
      }
      break;
    case 3:
      if (isS3(resumeEntry)) {
        return (
          <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
            <Typography gutterBottom sx={{ fontSize: 14 }}>
              {resumeEntry.year}
            </Typography>
            <Typography variant="h5" component="div" marginBottom="20px">
              {resumeEntry.nickname}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Kind of Activity:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.activity_kind}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Things Learned:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.things_learned}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Level:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.level}
            </Typography>
          </CardContent>
        );
      }
      break;
    case 4:
      if (isS4(resumeEntry)) {
        return (
          <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
            <Typography gutterBottom sx={{ fontSize: 14 }}>
              {resumeEntry.year}
            </Typography>
            <Typography variant="h5" component="div" marginBottom="20px">
              {resumeEntry.nickname}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Kind of Activity:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.activity_kind}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Scope:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.scope}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Level:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.level}
            </Typography>
          </CardContent>
        );
      }
      break;
    case 5:
      if (isS5(resumeEntry)) {
        return (
          <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
            <Typography gutterBottom sx={{ fontSize: 14 }}>
              {resumeEntry.year}
            </Typography>
            <Typography variant="h5" component="div" marginBottom="20px">
              {resumeEntry.nickname}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Leadership Role:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.leadership_role}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Hours Spent:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.hours_spent}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Number of People Reached:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.num_people_reached}
            </Typography>
          </CardContent>
        );
      }
      break;
    case 6:
      if (isS6(resumeEntry)) {
        return (
          <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
            <Typography gutterBottom sx={{ fontSize: 14 }}>
              {resumeEntry.year}
            </Typography>
            <Typography variant="h5" component="div" marginBottom="20px">
              {resumeEntry.nickname}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Organization Name:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.organization_name}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Leadership Role:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.leadership_role}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Hours Spent:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.hours_spent}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Number of People Reached:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.num_people_reached}
            </Typography>
          </CardContent>
        );
      }
      break;
    case 7:
      if (isS7(resumeEntry)) {
        return (
          <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
            <Typography gutterBottom sx={{ fontSize: 14 }}>
              {resumeEntry.year}
            </Typography>
            <Typography variant="h5" component="div" marginBottom="20px">
              {resumeEntry.nickname}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Club Member Activities:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.club_member_activities}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Hours Spent:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.hours_spent}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Number of People Reached:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.num_people_reached}
            </Typography>
          </CardContent>
        );
      }
      break;
    case 8:
      if (isS8(resumeEntry)) {
        return (
          <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
            <Typography gutterBottom sx={{ fontSize: 14 }}>
              {resumeEntry.year}
            </Typography>
            <Typography variant="h5" component="div" marginBottom="20px">
              {resumeEntry.nickname}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Individual Group Activities:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.individual_group_activities}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Hours Spent:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.hours_spent}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Number of People Reached:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.num_people_reached}
            </Typography>
          </CardContent>
        );
      }
      break;
    case 9:
      if (isS9(resumeEntry)) {
        return (
          <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
            <Typography gutterBottom sx={{ fontSize: 14 }}>
              {resumeEntry.year}
            </Typography>
            <Typography variant="h5" component="div" marginBottom="20px">
              {resumeEntry.nickname}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Communication Type
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.communication_type}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Topic:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.topic}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Times Given:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.times_given}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Location:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.location}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Audience Size:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.audience_size}
            </Typography>
          </CardContent>
        );
      }
      break;
    case 10:
      if (isS10(resumeEntry)) {
        return (
          <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
            <Typography gutterBottom sx={{ fontSize: 14 }}>
              {resumeEntry.year}
            </Typography>
            <Typography variant="h5" component="div" marginBottom="20px">
              {resumeEntry.nickname}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Communication Type
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.communication_type}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Topic:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.topic}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Times Given:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.times_given}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Location:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.location}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Audience Size:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.audience_size}
            </Typography>
          </CardContent>
        );
      }
      break;
    case 11:
      if (isS11(resumeEntry)) {
        return (
          <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
            <Typography gutterBottom sx={{ fontSize: 14 }}>
              {resumeEntry.year}
            </Typography>
            <Typography variant="h5" component="div" marginBottom="20px">
              {resumeEntry.nickname}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Event and Level:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.event_and_level}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Exhibits or Division:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.exhibits_or_division}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Ribbon or Placings:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.ribbon_or_placings}
            </Typography>
          </CardContent>
        );
      }
      break;
    case 12:
      if (isS12(resumeEntry)) {
        return (
          <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
            <Typography gutterBottom sx={{ fontSize: 14 }}>
              {resumeEntry.year}
            </Typography>
            <Typography variant="h5" component="div" marginBottom="20px">
              {resumeEntry.nickname}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Contest or Event:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.contest_or_event}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Recognition Received:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.recognition_received}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Level:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.level}
            </Typography>
          </CardContent>
        );
      }
      break;
    case 13:
      if (isS13(resumeEntry)) {
        return (
          <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
            <Typography gutterBottom sx={{ fontSize: 14 }}>
              {resumeEntry.year}
            </Typography>
            <Typography variant="h5" component="div" marginBottom="20px">
              {resumeEntry.nickname}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Recognition Type:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.recognition_type}
            </Typography>
          </CardContent>
        );
      }
      break;
    case 14:
      if (isS14(resumeEntry)) {
        return (
          <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
            <Typography gutterBottom sx={{ fontSize: 14 }}>
              {resumeEntry.year}
            </Typography>
            <Typography variant="h5" component="div" marginBottom="20px">
              {resumeEntry.nickname}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Recognition Type:
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {resumeEntry.recognition_type}
            </Typography>
          </CardContent>
        );
      }
      break;
    default:
      break;
  }
}
