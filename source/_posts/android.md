---
title: android
abbrlink: 92bcb62d
date: 2021-05-24 13:18:32
---

把 commonlib 或者直接用 account sdk, car service 引进来，网络你们可以自己请求或者用 retrofit 抄项目代码都行

### 加油站信息
上海市嘉定区祁连山南路 2180号

### 插件
Alibaba Java Coding Guidelines

https://gitlab-rd0.maezia.com/eziash/fueling/ezia-fueling-fe-fueling

洗车(一汽 faw)
停车(上汽 svw)
保险
加油
违章

Log.d()
Log.i()
Log.w()
Log.e()

### openJDK mac的位置，需要填到 project structure
/usr/local/Cellar/openjdk@8/1.8.0+282/libexec/openjdk.jdk

### jacoco 导出文件
RUN > Generate Coverage Report > 选择 jacoco 导出的文件，选择导出的目录

### Manifest
```java
<uses-permission android:name="android.permission.INTERNET" />

<application
    android:allowBackup="true" // 允许备份
    android:supportsRtl="true" // 从右到左的布局
    android:hardwareAccelerated="true" // 硬件加速
    tools:ignore="GoogleAppIndexingWarning" // 提示警告
>
    <activity
        android:launchMode="singleTask" // 启动模式, standard 默认标准启动模式
        android:screenOrientation="fullSensor" // 屏幕中的显示的方向，由方向传感器决定
    />
</ application>
```

### 申明一个函数
```java
public void setPopupType(int popupType) {
    this.popupType = popupType;
}
```

### Layout
1368 * 700
```java
// 约束布局
<androidx.constraintlayout.widget.ConstraintLayout
    android:id="@+id/item"
    android:layout_width="0dp"
    android:layout_height="0dp"
    android:background="@drawable/shape_detail_bg"
    android:gravity="bottom"
    android:orientation="vertical" // 相对布局不需要这个属性
    app:layout_constraintBottom_toBottomOf="@id/guideline4"
    app:layout_constraintEnd_toEndOf="@id/guideline5"
    app:layout_constraintStart_toStartOf="@id/left"
    app:layout_constraintTop_toTopOf="@id/top">
```

### RelativeLayout
```java
// 相对于给定ID
android:layout_above 控件的底部置于给定ID的控件之上
android:layout_below 控件的底部置于给定ID的控件之下
android:layout_toLeftOf 控件的右边缘与给定ID的控件左边缘对齐
android:layout_toRightOf 控件的左边缘与给定ID的控件右边缘对齐
android:layout_alignBaseline 控件的baseline与给定ID的baseline对齐
android:layout_alignTop 控件的顶部边缘与给定ID的顶部边缘对齐
android:layout_alignBottom 控件的底部边缘与给定ID的底部边缘对齐
android:layout_alignLeft 控件的左边缘与给定ID的左边缘对齐
android:layout_alignRight 控件的右边缘与给定ID的右边缘对齐

// 相对于父类 （如果为 true）
android:layout_alignParentTop 将该控件的顶部与其父控件的顶部对齐
android:layout_alignParentBottom 将该控件的底部与其父控件的底部对齐
android:layout_alignParentLeft 将该控件的左部与其父控件的左部对齐
android:layout_alignParentRight 将该控件的右部与其父控件的右部对齐

// 居中
android:layout_centerHorizontal 将该控件的置于水平居中
android:layout_centerVertical 将该控件的置于垂直居中
android:layout_centerInParent 将该控件的置于父控件的中央

// 水平移动
android:layout_marginTop 上偏移的值
android:layout_marginBottom 下偏移的值
android:layout_marginLeft 左偏移的值
android:layout_marginRight 右偏移的值
```

### LinearLayout
```java
```

### Style
```java
<stroke android:width="2dp" android:color="#f0f" /> // 描边
<size android:width="50dp" android:height="50dp" /> // 大小
<solid android:color="@android:color/white"/> // 填充色
<gradient android:centerColor="#00ff00" android:endColor="#0000ff" android:startColor="#ff0000" android:type="linear" /> // 渐变色
<corners android:radius="10dp"/> // 圆角
<padding android:bottom="2dp" android:left="2dp" android:right="2dp" android:top="2dp"/>

<item android:state_pressed="true"> // 按压的时候
    <shape>
        <solid android:color="#FF9900" />
        <corners android:radius="5dp" />
    </shape>
</item>
<item android:state_pressed="false"> // 默认状态
    <shape>
        <solid android:color="#FF9900" />
        <corners android:radius="5dp" />
    </shape>
</item>

// textStyle 加粗斜体
// textAlignment 文本对齐方式

android:visibility="invisible" // 不可见
android:visibility="visible" // 可见
android:visibility="gone" // 隐藏

btn.setVisibility(View.GONE);
btn.setVisibility(View.VISIBLE);
btn.setVisibility(View.INVISIBLE);

```

### include
```java
// include
<include
    android:id="@+id/navi_title"
    layout="@layout/nav"
    app:layout_constraintEnd_toEndOf="parent"
    app:layout_constraintStart_toStartOf="parent"
    app:layout_constraintTop_toTopOf="parent" />
```

### guideline
```

// guideline
<androidx.constraintlayout.widget.Guideline
    android:id="@+id/Guideline_left"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:orientation="horizontal"
    app:layout_constraintGuide_percent="0.04" />

<androidx.constraintlayout.widget.Guideline
    android:id="@+id/Guideline_right"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:orientation="horizontal"
    app:layout_constraintGuide_percent="0.96" />

<androidx.constraintlayout.widget.Guideline
    android:id="@+id/Guideline_top"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:orientation="vertical"
    app:layout_constraintGuide_percent="0.04" />

<androidx.constraintlayout.widget.Guideline
    android:id="@+id/Guideline_bottom"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:orientation="vertical"
    app:layout_constraintGuide_percent="0.96" />


// TextView
<TextView
    android:id="@+id/textView"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="@string/title"
    android:textColor="#fff"
    android:textSize="24sp"
    android:maxLines="1" // 一行
    android:ellipsize="end" // 多余的显示点点点 （需要配合maxLines）
    android:layout_gravity="center_horizontal" // 内部元素的排列方式
    app:layout_constraintBottom_toBottomOf="@+id/top"
    app:layout_constraintStart_toEndOf="parent"
    app:layout_constraintStart_toStartOf="parent"
    app:layout_constraintTop_toTopOf="parent" />

// 直接指定 png (设置内外边距)
    // android:drawableRight="@drawable/btn_speller_delete_pressed"
    // android:drawablePadding="5dp"

// 文字删除线
    // text.getPaint().setFlags(Paint.STRIKE_THRU_TEXT_FLAG); // UNDERLINE_TEXT_FLAG text.setText(Html.fromHtml("<u>呵呵</u>"));
    // text.getPaint().setAntiAlias(true);

// 跑马灯
    // android:singleLine="true"
    // android:focusable="true"
    // android:ellipsize="marquee"
    // android:focusableInTouchMode="true"


// EditText
<EditText
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintLeft_toLeftOf="parent"
        android:textColor="#333333"
        android:background="#ddd"
        android:id="@+id/edit"
        android:hint="请输入密码"
        android:maxLines="1"
        android:inputType="textPassword"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content" />

editText.addTextChangedListener(new TextWatcher() { // 绑定事件
    @Override
    public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

    @Override
    public void onTextChanged(CharSequence s, int start, int before, int count) {}

    @Override
    public void afterTextChanged(Editable s) {}
});


// Button
<Button
    android:id="@+id/button2"
    android:layout_width="wrap_content" // match_parent
    android:layout_height="wrap_content"
    android:layout_marginLeft="12dp"
    android:layout_marginBottom="12dp"
    android:text="@string/btn1"
    app:backgroundTint="#333"
    app:layout_constraintBottom_toBottomOf="parent"
    app:layout_constraintStart_toStartOf="parent"
    android:layout_gravity="bottom" />


// Toast
public class TestActivity extends AppCompatActivity {
    Button submit;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        submit = findViewById(R.id.submit);
        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Context context = getApplicationContext();
                CharSequence text = "Hello world!";
                int duration = Toast.LENGTH_SHORT;
                Toast toast = Toast.makeText(context, text, duration);
                toast.show();
            }
        });
    }
}
// https://blog.csdn.net/duwangthefirst/article/details/80264155


// checkbox 类似的组件ToggleButto，Switch
<CheckBox
    android:id="@+id/c_1"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:button="@drawable/bg_checkbox"
    app:layout_constraintTop_toBottomOf="@+id/text"
    app:layout_constraintLeft_toLeftOf="parent"
    android:text="android"
    android:textSize="20sp" />
<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:state_checked="false" android:drawable="@drawable/ic_img_01"></item>
    <item android:state_checked="true" android:drawable="@drawable/ic_img_02"></item>
</selector>
c1 = findViewById(R.id.c_1);
c1.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
    @Override
    public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
        Toast.makeText(Test2.this, isChecked?"是":"否", Toast.LENGTH_LONG).show(); // 当前页面上下文 test2.java
    }
});

// WebView to do
WebView web;
WebSettings webSettings = web.getSettings();
webSettings.setJavaScriptEnabled(true);
web.setWebViewClient(new Callback());
web.loadUrl("http://www.baidu.com");
```

### RecyclerView
RecyclerView.Adapter 处理数据集合并负责绑定视图

```java
// 0 layout
android:overScrollMode="never"

// 1 build.gradle 加入类包
implementation 'androidx.recyclerview:recyclerview:1.1.0'

// 2 引入类
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.StaggeredGridLayoutManager;

private RecyclerView recyclerView;
private ArrayList<ItemClass> list2 = new ArrayList<>();

// 3 创建布局
recyclerView = findViewById(R.id.id_RecyclerView);
recyclerView.setHasFixedSize(true); // 避免重新计算大小
recyclerView.setNestedScrollingEnabled(false); // 取消 recyclerView 单独滑动效果 https://blog.csdn.net/tran_sient/article/details/103606709
// 当我们确定Item的改变不会影响RecyclerView的宽高的时候可以设置setHasFixedSize(true)，
// 并通过Adapter的增删改插方法去刷新RecyclerView，而不是通过notifyDataSetChanged()
// 其实可以直接设置为true，当需要改变宽高的时候就用notifyDataSetChanged() 去整体刷新一下

StaggeredGridLayoutManager layoutManager = new StaggeredGridLayoutManager(1, StaggeredGridLayoutManager.VERTICAL);
layoutManager.setOrientation(StaggeredGridLayoutManager.HORIZONTAL);
recyclerView.setLayoutManager(layoutManager);

// LinearLayoutManager layoutManager = new LinearLayoutManager(this, LinearLayoutManager.HORIZONTAL, false);
// recyclerView.setLayoutManager(layoutManager);

// 4 构建数据
list2.add(new ItemClass("一品漫城", "浦星公路"); // 类要提前写好，ItemClass.java
MyAdapter adapter = new MyAdapter(list2);
recyclerView.setAdapter(adapter); // 也是判断页面加载完成的时机

// ItemClass 的实现

// MyAdapter 的实现
NearbyAdapter mAdapter;

// https://www.jianshu.com/p/f1999c3f6a26
// recyclerView https://developer.android.com/guide/topics/ui/layout/recyclerview?hl=zh-cn
// RecyclerView.LayoutManager 布局管理
// https://developer.android.com/guide/topics/ui/layout/recyclerview?hl=zh-cn
```

### ImageView
```java
private ImageView img; // img 变量
img = findViewById(R.id.img);
img.getBackground().setTint(initColor);

// scaleType
// fitXY 撑满控件，宽高可能发生改变
// fitCenter 保持宽高比缩放，直至能够完全显示
// centerCrop 保持宽高比缩放，直至完全覆盖控件，裁剪显示
<ImageView
    android:layout_width="200dp"
    android:layout_height="400dp"
    android:background="#FF9900"
    app:layout_constraintRight_toRightOf="parent"
    app:layout_constraintBottom_toBottomOf="parent"
    android:src="@drawable/ic_img_01"
    android:scaleType="centerCrop"
    />
// 加载一张网络加载第三方库 https://github.com/bumptech/glide
Glide.with(this)
.load("http://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png")
.into(imageView);

```

### View
```java
<View
    android:id="@+id/popupMain"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/black_60"
    android:elevation="2dp"/> // 类似于 z-index
```

### Intent
```java
// 常用方式
Intent intent = new Intent(Test.this, Test2.class); // current page, next page
startActivity(intent);

/*
    传递数据
    test2.actionStart(test.this, 'd1', 'd2') 提供给 test 调用
*/
public static void actionStart(Context context, String data1, Int data2, Boolean data3) {
    Intent intent = new Intent(context, Test2.class); // 跳转的类 Test2
    intent.putExtra("uid", data1);
    intent.putExtra("count", data2);
    intent.putExtra("state", data3);
    context.startActivity(intent); // 启动 activity
}
Intent intent = getIntent();
String uid = intent.getStringExtra("uid");
Int count = intent.getIntExtra("count");
Boolean state = intent.getBooleanExtra("state");
Log.d("SecondActivity", uid);

// setComponent 其实和第一种方法一样的
Intent intent = new Intent();
intent.setClass(Test2.this, MainActivity.class);
// 或者 intent.setClassName(this, "com.example.app.SecondActivity");
// 或者 intent.setClassName(this.getPackageName(),"com.example.app.SecondActivity");
startActivity(intent);

/*
   拨打电话 10010
   2 种方式
*/
Uri uri = Uri.parse("tel:10010");
Intent intent = new Intent(Intent.ACTION_DIAL, uri);
startActivity(intent);
// 直接拨打电话，需要加上权限 <uses-permission id="android.permission.CALL_PHONE" />
Uri callUri = Uri.parse("tel:10010");
Intent intent = new Intent(Intent.ACTION_CALL, callUri);


/*
    发彩信
*/
// 给10010发送内容为“Hello”的短信
Uri uri = Uri.parse("smsto:10010");
Intent intent = new Intent(Intent.ACTION_SENDTO, uri);
intent.putExtra("sms_body", "Hello");
startActivity(intent);
// 发送彩信（相当于发送带附件的短信）
Intent intent = new Intent(Intent.ACTION_SEND);
intent.putExtra("sms_body", "Hello");
Uri uri = Uri.parse("content://media/external/images/media/23");
intent.putExtra(Intent.EXTRA_STREAM, uri);
intent.setType("image/png");

/*
    打开浏览器
*/
Uri uri = Uri.parse("https://www.baidu.com");
Intent intent = new Intent(Intent.ACTION_VIEW, uri);
startActivity(intent);

/*
    图片
*/
Intent intent = new Intent(Intent.ACTION_GET_CONTENT);
intent.setType("image/*");
startActivityForResult(intent, 2);

// 打开拍照程序
Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
startActivityForResult(intent, 1);

// 取出照片数据
Bundle extras = intent.getExtras();
Bitmap bitmap = (Bitmap) extras.get("data");

// 进入设置页面
Intent intent = new Intent(android.provider.Settings.ACTION_SETTINGS);
startActivity(intent);

// 调用拍照
Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
startActivityForResult(intent, 1);
// 获取照片
Bundle extras = intent.getExtras();
Bitmap bitmap = (Bitmap) extras.get("data");

// 卸载程序
Uri uri = Uri.parse("package:" + packageName);
Intent intent = new Intent(Intent.ACTION_DELETE, uri);
startActivity(intent);

// 隐式方法

// https://www.jianshu.com/p/67d99a82509b
```

### MainActivity.java
生命周期
onCreate
onStart
onResume
onPause
onStop
onDestroy

```java
package com.example.myapplication;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    String TAG="MyTag";
    TextView textView;
    ImageView img;
    Button btn;
  @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Log.d(TAG, "onCreate");
        // finish(); // 关闭这个 view
      textView = findViewById(R.id.textView7); // 查找节点
      btn = findViewById(R.id.btn);
      img = findViewById(R.id.img);

      btn.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
              textView.setText("click");
          }
      });

      img.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View v) {
                Intent intent = new Intent()
          }
      });
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.d(TAG, "onStart");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.d(TAG, "onPause");
        textView.setText("pause");
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.d(TAG, "onStop");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.d(TAG, "onRestart");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.d(TAG, "onDestroy");
    }
}
```

### okhttp
```java
implementation "com.squareup.retrofit2:retrofit:2.8.0"
implementation "com.squareup.retrofit2:converter-gson:2.8.0"
implementation "com.squareup.okhttp3:logging-interceptor:4.4.1"
implementation "com.squareup.retrofit2:adapter-rxjava2:2.6.0"
implementation 'com.squareup.okhttp3:logging-interceptor:4.4.1'
implementation "io.reactivex.rxjava2:rxjava:2.1.10"
implementation "io.reactivex.rxjava2:rxandroid:2.0.2"
```

### 快捷键
插入下一行 shift + enter
选种单词 opt + ↑
移动到错误 fn + f2
类的层结构 control + h


### 测试绘制时间
long startTime = System.currentTimeMillis();
long startTime = System.currentTimeMillis();
long totalTime = endTime-startTime;
Log.d("TTTT","totalTime:"+totalTime);


### adb
https://www.yeshen.com/faqs/H15tDZ6YW


### android第一行代码 第二版源码
https://www.jianshu.com/p/fe8515dc8e34?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation


### 自定义右上角菜单
```java
<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:id="@+id/add_item" android:title="Add"/>
    <item android:id="@+id/remove_item" android:title="Remove"/>
</menu>

@Override
public boolean onCreateOptionsMenu(Menu menu) {
    getMenuInflater().inflate(R.menu.main, menu);
    return true;
}

@Override
public boolean onOptionsItemSelected(MenuItem item) {
  switch (item.getItemId()) {
    case R.id.add_item:
      Toast.makeText(this, "You clicked Add", Toast.LENGTH_SHORT).show();
      break;
    case R.id.remove_item:
      Toast.makeText(this, "You clicked Remove", Toast.LENGTH_SHORT).show();
      break;
    default:
  }
  return true;
}
```

### 结束进程
```java
ActivityCollector.finishAll();
android.os.Process.killProcess(android.os.Process.myPid());
```

### java 语法
```java
equals
```

### learned
https://www.cnblogs.com/xgjblog/p/13042321.html
