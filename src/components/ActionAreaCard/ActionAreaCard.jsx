import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ActionAreaCard({ option, carHandler }) {
  const list = [];
  for (const [key, value] of Object.entries(option.data)) {
    list.push(
      <div key={key}>
        {key}: {value}
      </div>
    );
  }

  return (
    <Card
      sx={{ maxWidth: 345, m: 1 }}
      onClick={() => {
        carHandler && carHandler(option);
      }}
    >
      {option.image && (
        <CardMedia
          component="img"
          height="140"
          image={option.image}
          alt="green iguana"
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {option.name}
        </Typography>
        {list}
      </CardContent>
    </Card>
  );
}
