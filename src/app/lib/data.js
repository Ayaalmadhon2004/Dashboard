import { User, Product } from "./models";
import { connectToDB } from "./utils";

const ITEM_PER_PAGE = 2;

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

ما المقصود بوجه النهار 
ما المقصود بلا خلاق لهم 
كيف تكون التزكية في يوم القيامة 
ما المقصود بان الله واسع 
ما المقصود بليس علينا في الاميين سبيل 
من الفئة الموجهة لها الحديث في ان يؤتى احد مثلما اوتيتم 
لماذا ذكر الله انه سيعلم عيسى الكتاب والحكمة والتوارة مع انهما تحتوي على نفس الاحكام 
لماذا قرن الله تكليم عيسى بالمهد بالكهولة 
هل عيسى وموسى كان لهما مفس المعجزات 
ما الذي كان محرم على بني اسرائيل واحله عيسى ولم كان محرمكم 
كم كان عدد الحواريون واوصافهم
لماذ قال الله ان يدعوا ابناءهم ونساءهم وانفسهم ثم يبتهلوا هل ليكن تلانسان مع كل ما يملك في هذا الموقف
لماذا ذكر الله في قصة عيسى انه توفاه ما معناه
ما الفرق بين الايات والذكر 
لماذا قدم الله الابناء على النساء والنساء على النفس في ايى فمن حاجك فيه من بعد ما جاءك
فاكتبنما مع الشاهدين , من الشاهدين وما منزلتهم

لماذا قال القصص رغم انه لم يذكر قصة قبلها 
لماذا قال كلمة ولم يقل امر في قل يا اهل الكتاب تعالوا الى كلمة 
