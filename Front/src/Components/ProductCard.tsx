import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"


const ProductCard=(props:any)=>{
    return (
        <div onClick={() => {props.getProduct(props.productId); console.log(props)}}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="150"
                    image={props.pictureUrl}
                    alt="iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.productName} 
                          </Typography>
                            <Typography>
                        {props.price} {props.currency}
                          </Typography>
                  
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to cart</Button>
                    <Button component ={Link} to={`/products/${props.id}`}size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}
export default ProductCard;