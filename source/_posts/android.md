---
title: android
date: 2021-05-24 13:18:32
---

把 commonlib 或者直接用 account sdk, car service 引进来，网络你们可以自己请求或者用 retrofit 抄项目代码都行

https://gitlab-rd0.maezia.com/eziash/fueling/ezia-fueling-fe-fueling

洗车(一汽)
保险
停车
加油
违章

Log.d(),i(),w(),e()

## openJDK mac的位置，需要填到 project structure 里
/usr/local/Cellar/openjdk@8/1.8.0+282/libexec/openjdk.jdk

## 权限
```java
<uses-permission android:name="android.permission.INTERNET" />
```

## 申明一个函数
```java
public void setPopupType(int popupType) {
    this.popupType = popupType;
}
```

## Layout
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

## style
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
```

## Components
```java
// include
<include
    android:id="@+id/navi_title"
    layout="@layout/nav"
    app:layout_constraintEnd_toEndOf="parent"
    app:layout_constraintStart_toStartOf="parent"
    app:layout_constraintTop_toTopOf="parent" />


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


// Intent
// 在当前类里点击跳转
Intent intent = new Intent(Test.this, Test2.class); // current page, next page
startActivity(intent);
// 在跳转的类里触发方法跳转
public static void actionStart(Context context, String data1, String data2) {
    Intent intent = new Intent(context, Test2.class);
    intent.putExtra("param1", data1);
    intent.putExtra("param2", data2); // 不知道如何接收 传递过来的对象
    context.startActivity(intent);
}


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


// ImageView
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



// RecyclerView 相对复杂的组件
// RecyclerView.Adapter 处理数据集合并负责绑定视图
// ViewHolder
// 1 引入类
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.StaggeredGridLayoutManager;

private RecyclerView recyclerView;
private ArrayList<ItemClass> list2 = new ArrayList<>();

// 2 创建布局
recyclerView = findViewById(R.id.id_RecyclerView);
recyclerView.setHasFixedSize(true)
// 当我们确定Item的改变不会影响RecyclerView的宽高的时候可以设置setHasFixedSize(true)，
// 并通过Adapter的增删改插方法去刷新RecyclerView，而不是通过notifyDataSetChanged()
// 其实可以直接设置为true，当需要改变宽高的时候就用notifyDataSetChanged() 去整体刷新一下
StaggeredGridLayoutManager layoutManager = new StaggeredGridLayoutManager(1, StaggeredGridLayoutManager.VERTICAL);
layoutManager.setOrientation(StaggeredGridLayoutManager.HORIZONTAL);
recyclerView.setLayoutManager(layoutManager);

// 3 构建数据
list2.add(new ItemClass("一品漫城", "浦星公路"); // 类要提前写好，ItemClass.java
MyAdapter adapter = new MyAdapter(list2);
recyclerView.setAdapter(adapter); // 也是判断页面加载完成的时机

// ItemClass 的实现

// MyAdapter 的实现

// https://www.jianshu.com/p/f1999c3f6a26
// recyclerView https://developer.android.com/guide/topics/ui/layout/recyclerview?hl=zh-cn
// RecyclerView.LayoutManager 布局管理
// https://developer.android.com/guide/topics/ui/layout/recyclerview?hl=zh-cn


// WebView to do
WebView web;
WebSettings webSettings = web.getSettings();
webSettings.setJavaScriptEnabled(true);
web.setWebViewClient(new Callback());
web.loadUrl("http://www.baidu.com");
```

## MainActivity.java
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


## http
```java
implementation "com.squareup.retrofit2:retrofit:2.8.0"
implementation "com.squareup.retrofit2:converter-gson:2.8.0"
implementation "com.squareup.okhttp3:logging-interceptor:4.4.1"
implementation "com.squareup.retrofit2:adapter-rxjava2:2.6.0"
implementation 'com.squareup.okhttp3:logging-interceptor:4.4.1'
implementation "io.reactivex.rxjava2:rxjava:2.1.10"
implementation "io.reactivex.rxjava2:rxandroid:2.0.2"
```

## 快捷键
插入下一行 shift + enter
选种单词 opt + ↑
移动到错误 fn + f2
类的层结构 control + h

## 测试绘制时间
long startTime = System.currentTimeMillis();
long startTime = System.currentTimeMillis();
long totalTime = endTime-startTime;
Log.d("TTTT","totalTime:"+totalTime);

## jocaca 报错
```java
package com.ezia.fawmqb.carwash.shadowUtil;

import android.content.Context;
import android.os.Bundle;
import android.view.View;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.ezia.commonlib.widget.CommonDialog;

import org.robolectric.annotation.Implementation;
import org.robolectric.annotation.Implements;

/**
 * created by GuoWei
 * created on 2021/5/31
 */
@Implements(CommonDialog.class)
public class ShadowCommonDialog {
    @Implementation
    public static String getAppLanguage(Context context) {
        return "zh_CN";
    }
}
```


## adb
https://www.yeshen.com/faqs/H15tDZ6YW

## android第一行代码 第二版源码
https://www.jianshu.com/p/fe8515dc8e34?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation



## 自定义右三个点的 菜单
