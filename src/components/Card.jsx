import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function MyCard() {
    return (
      <div className="card">
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                benevolent
              </Typography>
            </CardContent>
          </Card>
      </div>
    );
  }
  
  export default MyCard;
