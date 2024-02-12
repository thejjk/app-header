import { Avatar, Grid, Typography } from '@mui/material';
import { stringAvatar } from 'src/utils';

function PageHeader() {
  const user = {
    name: 'Catarina Pirlo',
    // avatar: '/static/images/avatars/1.jpg'
  };

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar {...stringAvatar(user.name)}
          sx={{mr: 2,}}
          variant="rounded"
          />

      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Olá, {user.name}!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
