---
title: jackpack
abbrlink: dfd09edc
date: 2021-08-18 09:26:22
tags:
---

### jackpack 基础 架构 行为 界面

### ViewModel
```java
// Activity
private void init() {
    add1 = findViewById(R.id.button);
    textView = findViewById(R.id.count);
    myViewModel = new ViewModelProvider(this, new ViewModelProvider.NewInstanceFactory()).get(MyViewModel.class);
    // 触发
    add1.setOnClickListener(v -> {
        myViewModel.changeCount(1);
    });
    // 监听
    myViewModel.getCount().observe(this, v -> {
        textView.setText(String.valueOf(v));
    });
}
// ViewModel
public class MyViewModel extends ViewModel {
    private MutableLiveData<Integer> count;

    public MutableLiveData<Integer> getCount() {
        if (count == null) {
            count = new MutableLiveData<>();
            count.setValue(0);
        }
        return count;
    }

    public void changeCount(int v) {
        count.setValue(count.getValue() + v);
    }
}
```

### BuildingData
```java
// ViewModel 不变
dataBinding { enabled true } or dataBinding { enabled true } // build.gradle  android 平级后者
buildFeatures { dataBinding = true } // ...
Convert to data binding layout // activity_main.xml 页面会多一对 data 标签,自己添加 variable
<data>
    <variable
        name="data"
        type="com.example.demo.MyViewModel" /> // activity 里就有 ActivityMainBinding 类了
</data>

<TextView
    android:id="@+id/count"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="@{String.valueOf(data.count)}"
    android:textColor="#3F51B5"
    android:textSize="26sp"
    app:layout_constraintBottom_toBottomOf="@+id/guideline2"
    app:layout_constraintEnd_toEndOf="parent"
    app:layout_constraintHorizontal_bias="0.498"
    app:layout_constraintStart_toStartOf="parent"
    app:layout_constraintTop_toTopOf="parent"
    app:layout_constraintVertical_bias="0.549" />
<Button
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="-1"
    android:onClick="@{()->data.changeCount(-1)}"
    app:layout_constraintBottom_toTopOf="@+id/guideline3"
    app:layout_constraintEnd_toEndOf="parent"
    app:layout_constraintStart_toStartOf="@+id/guideline"
    app:layout_constraintTop_toTopOf="@+id/guideline2" />
// 启动文件
public class MainActivity extends AppCompatActivity {
    MyViewModel myViewModel;
    ActivityMainBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        init();
    }

    private void init() {
        binding = DataBindingUtil.setContentView(this, R.layout.activity_main); // 相当于 window 对象
        myViewModel = new ViewModelProvider(this, new ViewModelProvider.NewInstanceFactory()).get(MyViewModel.class);
        binding.setData(myViewModel); // 反向绑定
        binding.setLifecycleOwner(this); // 生命周期
    }
}

// guomaotianyue yiqi 5 1201
/*
 * 发送自定义广播
 * 注册 触发
*/
myBroadcastReceiver = new MyBroadcastReceiver();
registerReceiver(myBroadcastReceiver, new IntentFilter("haha"));

Intent intent = new Intent("haha");
sendBroadcast(intent);

// MyBroadcastReceiver
public class MyBroadcastReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        Toast.makeText(context, "show", Toast.LENGTH_SHORT).show();
    }
}
```

### ViewModel SavedState
```java

```