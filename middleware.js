export async function middleware(request) {
  const token = await getToken({ req: request });

  const isAuth = !!token; // هل يوجد توكن؟ أي هل المستخدم مسجل دخول؟
  const isLogin = request.nextUrl.pathname === "/login"; // هل المسار هو صفحة تسجيل الدخول؟

  // إذا لم يكن المستخدم مسجل دخول وحاول الدخول لأي صفحة داخل /dashboard
  if (!isAuth && request.nextUrl.pathname.startsWith("/dashboard")) {
    // نعيد توجيهه لصفحة تسجيل الدخول
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // إذا كان المستخدم مسجل دخول وحاول يزور صفحة تسجيل الدخول
  if (isAuth && isLogin) {
    // نعيد توجيهه للصفحة الرئيسية بعد تسجيل الدخول (مثلاً لوحة التحكم)
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // في باقي الحالات نسمح للطلب بالمرور
  return NextResponse.next();
}
