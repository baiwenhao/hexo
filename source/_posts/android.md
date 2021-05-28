---
title: android
date: 2021-05-24 13:18:32
---

把commonlib或者直接用account sdk, car service引进来，网络你们可以自己请求或者用retrofit抄项目代码都行

## Layout
1368 * 700
```java
<androidx.constraintlayout.widget.ConstraintLayout
    android:id="@+id/item"
    android:layout_width="0dp"
    android:layout_height="0dp"
    android:background="@drawable/shape_detail_bg"
    android:gravity="bottom"
    android:orientation="vertical"
    app:layout_constraintBottom_toBottomOf="@id/guideline4"
    app:layout_constraintEnd_toEndOf="@id/guideline5"
    app:layout_constraintStart_toStartOf="@id/left"
    app:layout_constraintTop_toTopOf="@id/top">
```

## Components
```java
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
    app:layout_constraintBottom_toBottomOf="@+id/top"
    app:layout_constraintStart_toEndOf="parent"
    app:layout_constraintStart_toStartOf="parent"
    app:layout_constraintTop_toTopOf="parent" />

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


// ImageView 靠右
<ImageView
    android:id="@+id/imageView"
    android:layout_width="60dp"
    android:layout_height="0dp"
    android:contentDescription="@string/app_name"
    app:layout_constraintTop_toTopOf="parent"
    app:layout_constraintBottom_toTopOf="@+id/top"
    app:layout_constraintStart_toEndtOf="parent"
    app:layout_constraintEnd_toEndOf="parent"
    app:srcCompat="@drawable/refresh" />
// app:layout_constraintDimensionRatio
// android:visibility

// recyclerView https://developer.android.com/guide/topics/ui/layout/recyclerview?hl=zh-cn
// RecyclerView.LayoutManager 布局管理
// https://developer.android.com/guide/topics/ui/layout/recyclerview?hl=zh-cn

// RecyclerView.Adapter 处理数据集合并负责绑定视图
// ViewHolder
```

## MainActivity.java
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
              textView.setText("img");
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

// ConstraintLayout 约束布局
// RelativeLayout 相对布局
// ConstraintLayout
// orientation=vertical layout_gravity=left ,center ,right
// orientation=horizontal layout_gravity=top,center,bottom

## Toast
```java
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
```

## Intent
```java

```

## http
```
implementation "com.squareup.retrofit2:retrofit:2.8.0"
implementation "com.squareup.retrofit2:converter-gson:2.8.0"
implementation "com.squareup.okhttp3:logging-interceptor:4.4.1"
implementation "com.squareup.retrofit2:adapter-rxjava2:2.6.0"
implementation 'com.squareup.okhttp3:logging-interceptor:4.4.1'
implementation "io.reactivex.rxjava2:rxjava:2.1.10"
implementation "io.reactivex.rxjava2:rxandroid:2.0.2"
```


