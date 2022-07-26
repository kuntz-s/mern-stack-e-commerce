import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderItems:[
        {    
            name:{type: String, required: true},
            qty:{type: Number, required: true},
            price:{type: Number, required: true},
            product:{type: mongoose.Schema.Types.ObjectId , required: true, ref:'Product'}
        }
    ],
    shippingAdress: {
      adress:{type:String, required:true},
      city:{type: String, required: true},
      country:{type:String, required:true},
    //  postalCode:{type: String, default:""}
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id:{type: String},
      status:{type: String},
      update_time:{type: String},
      email_adress:{type: String},
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      default:  0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default:  false,
    },
    paidAt: {
        type: Date
    },
    isDelivered: {
        type:Boolean,
        require:true,
        default : false
    },
    deliveredAt: {
        type: Date
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
