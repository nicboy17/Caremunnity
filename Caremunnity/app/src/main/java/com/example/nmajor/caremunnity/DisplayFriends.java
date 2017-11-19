package com.example.nmajor.caremunnity;

import android.content.Context;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class DisplayFriends extends AppCompatActivity {
    RecyclerView recyclerView;
    RecyclerView.Adapter adapter;
    RecyclerView.LayoutManager layoutManager;
    ArrayList<friend> arrayList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_display_friends);
        recyclerView = (RecyclerView)findViewById(R.id.recyclerView);
        layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);
        recyclerView.setHasFixedSize(true);

        JsonArrayRequest jsonRequest = new JsonArrayRequest(Request.Method.GET, "http://real-time-solutions.com:4000/api/friends/1",
                new Response.Listener<JSONArray>() {
            @Override
            public void onResponse(JSONArray response) {
                int count = 0;
                while(count < response.length()) {
                    JSONObject jsonObject = null;
                    try {
                        jsonObject = response.getJSONObject(count);
                        friend f = new friend();
                        f.setName(jsonObject.getString("first"), jsonObject.getString("last"));
                        f.setPhoto(jsonObject.getString("picture"), DisplayFriends.this);
                        arrayList.add(f);
                        count ++;
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                error.printStackTrace();
            }
        });
        Mysingleton.getInstance(DisplayFriends.this).addToRequestque(jsonRequest);
        adapter = new RecyclerAdapter(arrayList, DisplayFriends.this);
        recyclerView.setAdapter(adapter);
    }
}
