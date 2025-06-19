"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { User, Product } from "./models"; // استيراد موديل المنتج أيضاً
import { connectToDB } from "./utils";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
  const {
    username,
    email,
    password,
    phone,
    address,
    isAdmin,
    isActive,
  } = Object.fromEntries(formData);

  try {
    await connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("فشل في إنشاء المستخدم!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  const {
    title,
    description,
    price,
    stock,
    category,
    img,
    isFeatured,
  } = Object.fromEntries(formData);

  try {
    await connectToDB();

    const newProduct = new Product({
      title,
      description,
      price: Number(price),
      stock: Number(stock),
      category,
      img,
      isFeatured: isFeatured === "true",
    });

    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("فشل في إنشاء المنتج!");
  }

  revalidatePath("/dashboard/products"); // لاحظ الأحرف الصغيرة
  redirect("/dashboard/products");
};



export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDB(); // تأكد من await
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(" خطأ أثناء حذف المستخدم:", err);
    throw new Error("Failed to delete user"); // ✅ نص الخطأ الصحيح
  }

  revalidatePath("/dashboard/users");
};


export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(" خطأ أثناء حذف المنتج:", err);
    throw new Error("Failed to delete product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};



export const updateUser = async (formData) => {
  const {
    id,
    username,
    email,
    password,
    phone,
    address,
    isAdmin,
    isActive,
  } = Object.fromEntries(formData);

  try {
    await connectToDB();

    // إنشاء كائن يحتوي على القيم التي نريد تحديثها
    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    // حذف الحقول الفارغة أو undefined من التحديث
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || updateFields[key] === undefined) && // if there is no data , or undefined data , it will delete it 
        delete updateFields[key]
    );

    // إذا كان هناك كلمة مرور، نقوم بتشفيرها
    if (updateFields.password) {
      const salt = await bcrypt.genSalt(10);
      updateFields.password = await bcrypt.hash(updateFields.password, salt);
    }

    // تحديث المستخدم
    await User.findByIdAndUpdate(id, updateFields);

  } catch (err) {
    console.log(" خطأ أثناء تحديث المستخدم:", err);
    throw new Error("Failed to update user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateProduct = async (formData) => {
  const {
    id,
    username,
    email,
    password,
    phone,
    address,
    isAdmin,
    isActive,
  } = Object.fromEntries(formData);

  try {
    await connectToDB();

    // إنشاء كائن يحتوي على القيم التي نريد تحديثها
    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    // حذف الحقول الفارغة أو undefined من التحديث
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || updateFields[key] === undefined) &&
        delete updateFields[key]
    );

    // إذا كان هناك كلمة مرور، نقوم بتشفيرها
    if (updateFields.password) {
      const salt = await bcrypt.genSalt(10);
      updateFields.password = await bcrypt.hash(updateFields.password, salt);
    }

    // تحديث المستخدم
    await User.findByIdAndUpdate(id, updateFields);

  } catch (err) {
    console.log(" خطأ أثناء تحديث المستخدم:", err);
    throw new Error("Failed to update user");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};



