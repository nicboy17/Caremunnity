package com.example.nmajor.caremunnity;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.android.volley.Cache;
import com.android.volley.Network;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.BasicNetwork;
import com.android.volley.toolbox.DiskBasedCache;
import com.android.volley.toolbox.HurlStack;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONObject;

public class MainActivity extends AppCompatActivity {
    Button button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        button = (Button) findViewById(R.id.bn);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick (View v) {
                startActivity(new Intent(MainActivity.this, DisplayFriends.class));
            }
        });
    }


    /*TextView textView;
    String server_url = "http://74.15.46.198:4000/api/friends/1";
    RequestQueue requestQueue;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        button = (Button)findViewById(R.id.bn);
        textView = (TextView)findViewById(R.id.txt);

        Cache cache = new DiskBasedCache(getCacheDir(), 1024*1024);
        Network network = new BasicNetwork(new HurlStack());
        requestQueue = new RequestQueue(cache, network);
        requestQueue.start();

        button.setOnClickListener(new View.OnClickListener() {
           @Override
            public void onClick(View v) {
               final RequestQueue requestQueue = Volley.newRequestQueue(MainActivity.this);

               JsonObjectRequest jsonRequest = new JsonObjectRequest(Request.Method.GET, server_url, new Response.Listener<JSONObject>() {
                   @Override
                   public void onResponse(JSONObject response) {
                        textView.setText(response.toString());
                   }
               }, new Response.ErrorListener() {
                   @Override
                   public void onErrorResponse(VolleyError error) {
                       textView.setText("Server Error...");
                       error.printStackTrace();
                   }
               });
               Mysingleton.getInstance(getApplicationContext()).addToRequestque(jsonRequest);
           }
        });
    }*/


}
