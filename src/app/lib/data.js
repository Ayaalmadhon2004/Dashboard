import { User, Product } from "./models";
import { connectToDB } from "./utils";

const ITEM_PER_PAGE = 2;
export const revalidate = 10; // يحدث الصفحة كل 10 ثواني فقط


export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  try {
    await connectToDB();

    const count = await User.countDocuments({ username: { $regex: regex } }); // to have data from search without conditions 
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return { count, users };
    
  } catch (err) {
    console.error("Error fetching users:", err);
    throw new Error("Failed to fetch users");
  }
};

export const fetchUser=async(id)=>{
  try{
    await connectToDB();
    const user =await(User.findById(id));
    return user; // as an object , have username , email...
  } catch (err){
    console.log(err);
    throw new Error("Faild to fetch user !");
  }
}

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  try {
    await connectToDB();

    const count = await Product.countDocuments({ title: { $regex: regex } });
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return { count, products };
  } catch (err) {
    console.error("Error fetching products:", err);
    throw new Error("Failed to fetch products");
  }
};

export const fetchProduct=async(id)=>{
  try{
    await connectToDB();
    const product=await(product.findById(id));
    return product; // as an object , have username , email...
  } catch (err){
    console.log(err);
    throw new Error("Faild to fetch product !");
  }
}

